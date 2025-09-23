class PasteleriaCart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.init();
    }

    init() {
        // Inicializar event listeners para los botones de agregar al carrito
        this.setupEventListeners();
        // Cargar carrito desde localStorage si existe
        this.loadFromStorage();
        // Actualizar contador del header
        this.updateCartCounter();
    }

    setupEventListeners() {
        // Event listeners para botones "Añadir al carrito"
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart')) {
                const productId = e.target.getAttribute('data-product-id');
                const productName = e.target.getAttribute('data-product-name');
                const productPrice = parseInt(e.target.getAttribute('data-product-price'));
                
                this.addItem({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });

                // Feedback visual
                this.showAddedToCartFeedback(e.target);
            }
        });

        // Event listener para botón del carrito en header
        const cartBtn = document.getElementById('cart-btn');
        if (cartBtn) {
            cartBtn.addEventListener('click', () => {
                this.showCartModal();
            });
        }
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += product.quantity || 1;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity || 1
            });
        }
        
        this.calculateTotal();
        this.updateCartCounter();
        this.saveToStorage();
        return this;
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.calculateTotal();
        this.updateCartCounter();
        this.saveToStorage();
        return this;
    }

    updateQuantity(productId, newQuantity) {
        const item = this.items.find(item => item.id === productId);
        
        if (item) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = newQuantity;
                this.calculateTotal();
                this.updateCartCounter();
                this.saveToStorage();
            }
        }
        
        return this;
    }

    calculateTotal() {
        this.total = this.items.reduce((sum, item) => {
            return sum + (item.price * item.quantity);
        }, 0);
        
        return this.total;
    }

    getTotalItems() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    clear() {
        this.items = [];
        this.total = 0;
        this.updateCartCounter();
        this.saveToStorage();
        return this;
    }

    // Aplicar código promocional
    applyPromoCode(code) {
        const promoCodes = {
            'FELICES50': { discount: 10, type: 'percentage' },
            'ESTUDIANTE': { discount: 15, type: 'percentage' },
            'CUMPLEANOS': { discount: 5000, type: 'fixed' }
        };

        if (promoCodes[code]) {
            const promo = promoCodes[code];
            let discount = 0;

            if (promo.type === 'percentage') {
                discount = this.total * (promo.discount / 100);
            } else if (promo.type === 'fixed') {
                discount = Math.min(promo.discount, this.total);
            }

            return {
                valid: true,
                discount: discount,
                finalTotal: this.total - discount,
                message: `Código ${code} aplicado correctamente`
            };
        }

        return {
            valid: false,
            message: 'Código promocional inválido'
        };
    }

    // Actualizar contador en header
    updateCartCounter() {
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = this.getTotalItems();
        }
    }

    // Mostrar feedback cuando se agrega producto
    showAddedToCartFeedback(button) {
        const originalText = button.textContent;
        button.textContent = '¡Agregado! ✓';
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 1500);
    }

    // Modal del carrito
    showCartModal() {
        const modal = this.createCartModal();
        document.body.appendChild(modal);
        
        // Mostrar modal
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    createCartModal() {
        const modal = document.createElement('div');
        modal.className = 'cart-modal';
        modal.innerHTML = `
            <div class="cart-modal-overlay" onclick="this.parentElement.remove()">
                <div class="cart-modal-content" onclick="event.stopPropagation()">
                    <div class="cart-modal-header">
                        <h3>Tu Carrito 🛒</h3>
                        <button class="close-modal" onclick="this.closest('.cart-modal').remove()">×</button>
                    </div>
                    
                    <div class="cart-modal-body">
                        ${this.items.length === 0 ? this.getEmptyCartHTML() : this.getCartItemsHTML()}
                    </div>
                    
                    ${this.items.length > 0 ? this.getCartFooterHTML() : ''}
                </div>
            </div>
        `;

        // Estilos del modal
        if (!document.getElementById('cart-modal-styles')) {
            const styles = document.createElement('style');
            styles.id = 'cart-modal-styles';
            styles.textContent = `
                .cart-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.7);
                    z-index: 10000;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .cart-modal.show {
                    opacity: 1;
                }
                .cart-modal-content {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    border-radius: 12px;
                    max-width: 600px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                }
                .cart-modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px;
                    border-bottom: 1px solid #eee;
                }
                .close-modal {
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    width: 30px;
                    height: 30px;
                }
                .cart-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 20px;
                    border-bottom: 1px solid #f0f0f0;
                }
                .cart-item-info h4 {
                    margin: 0 0 5px 0;
                    font-size: 16px;
                }
                .cart-item-price {
                    font-weight: bold;
                    color: #d4a574;
                }
                .quantity-controls {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .quantity-btn {
                    background: #f0f0f0;
                    border: none;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    cursor: pointer;
                }
                .remove-item {
                    background: #dc3545;
                    color: white;
                    border: none;
                    padding: 5px 10px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 12px;
                }
                .cart-total {
                    padding: 20px;
                    text-align: center;
                    font-size: 20px;
                    font-weight: bold;
                    background: #f8f9fa;
                    border-top: 2px solid #d4a574;
                }
                .checkout-btn {
                    background: #d4a574;
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 8px;
                    font-size: 16px;
                    cursor: pointer;
                    margin-top: 15px;
                }
                .empty-cart {
                    text-align: center;
                    padding: 40px 20px;
                    color: #666;
                }
            `;
            document.head.appendChild(styles);
        }

        return modal;
    }

    getEmptyCartHTML() {
        return `
            <div class="empty-cart">
                <h4>Tu carrito está vacío</h4>
                <p>¡Agrega algunos deliciosos productos de nuestra pastelería!</p>
            </div>
        `;
    }

    getCartItemsHTML() {
        return this.items.map(item => `
            <div class="cart-item" data-product-id="${item.id}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">$${item.price.toLocaleString()} CLP</div>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1}); this.closest('.cart-modal').remove(); cart.showCartModal();">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1}); this.closest('.cart-modal').remove(); cart.showCartModal();">+</button>
                    </div>
                    <button class="remove-item" onclick="cart.removeItem('${item.id}'); this.closest('.cart-modal').remove(); cart.showCartModal();">Eliminar</button>
                </div>
            </div>
        `).join('');
    }

    getCartFooterHTML() {
        return `
            <div class="cart-total">
                <div>Total: $${this.total.toLocaleString()} CLP</div>
                <button class="checkout-btn" onclick="cart.proceedToCheckout()">
                    Proceder al pago
                </button>
                <button class="checkout-btn" onclick="cart.clear(); this.closest('.cart-modal').remove();" 
                        style="background: #6c757d; margin-left: 10px;">
                    Vaciar carrito
                </button>
            </div>
        `;
    }

    proceedToCheckout() {
        alert(`¡Gracias por tu compra!\nTotal: $${this.total.toLocaleString()} CLP\nProductos: ${this.getTotalItems()}\n\n`);
        
        // Cerrar modal
        const modal = document.querySelector('.cart-modal');
        if (modal) modal.remove();
    }

    // Persistencia en localStorage
    saveToStorage() {
        try {
            localStorage.setItem('pasteleriaCart', JSON.stringify({
                items: this.items,
                total: this.total
            }));
        } catch (error) {
            console.warn('No se pudo guardar el carrito en localStorage');
        }
    }

    loadFromStorage() {
        try {
            const saved = localStorage.getItem('pasteleriaCart');
            if (saved) {
                const data = JSON.parse(saved);
                this.items = data.items || [];
                this.calculateTotal();
            }
        } catch (error) {
            console.warn('No se pudo cargar el carrito desde localStorage');
        }
    }

    // Método para obtener resumen del carrito
    getCartSummary() {
        return {
            items: this.items,
            totalItems: this.getTotalItems(),
            total: this.total,
            formattedTotal: `$${this.total.toLocaleString()} CLP`,
            isEmpty: this.items.length === 0
        };
    }
}

// Inicializar carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Crear instancia global del carrito
    window.cart = new PasteleriaCart();
    
    console.log('🛒 Carrito de Pastelería 1000 Sabores inicializado');
});

// Función auxiliar para copiar código promocional (para el botón en el HTML)
function copyPromoCode() {
    navigator.clipboard.writeText('FELICES50').then(() => {
        alert('¡Código FELICES50 copiado al portapapeles!');
    }).catch(() => {
        // Fallback para navegadores que no soporten clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = 'FELICES50';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('¡Código FELICES50 copiado al portapapeles!');
    });
}