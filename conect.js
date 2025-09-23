class ProductFilter {
    constructor() {
        this.currentFilter = 'todos';
        this.products = [];
        this.filteredProducts = [];
        this.init();
    }

    init() {
        // Obtener todos los productos del DOM
        this.loadProducts();
        // Configurar event listeners
        this.setupEventListeners();
        // Mostrar todos los productos inicialmente
        this.filterProducts('todos');
        
        console.log('🔍 Filtro de productos inicializado');
    }

    loadProducts() {
        const productElements = document.querySelectorAll('.producto-card');
        this.products = Array.from(productElements).map(element => ({
            element: element,
            category: element.getAttribute('data-category'),
            productId: element.getAttribute('data-product'),
            title: element.querySelector('.producto-titulo')?.textContent || '',
            description: element.querySelector('.producto-descripcion')?.textContent || '',
            price: element.querySelector('.producto-precio')?.textContent || '',
            visible: true
        }));
    }

    setupEventListeners() {
        // Event listeners para botones de filtro
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = button.getAttribute('data-filter');
                this.setActiveFilter(button, filter);
                this.filterProducts(filter);
            });
        });

        // Event listener para búsqueda (si quieres agregar funcionalidad de búsqueda)
        this.setupSearchFunctionality();
    }

    setActiveFilter(activeButton, filter) {
        // Remover clase active de todos los botones
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        
        // Agregar clase active al botón seleccionado
        activeButton.classList.add('active');
        activeButton.setAttribute('aria-selected', 'true');
        
        this.currentFilter = filter;
    }

    filterProducts(category) {
        let visibleCount = 0;
        
        this.products.forEach(product => {
            const shouldShow = category === 'todos' || product.category === category;
            
            if (shouldShow) {
                this.showProduct(product.element);
                product.visible = true;
                visibleCount++;
            } else {
                this.hideProduct(product.element);
                product.visible = false;
            }
        });

        // Actualizar contador de productos visibles
        this.updateResultsCount(visibleCount, category);
        
        // Animar entrada de productos
        this.animateFilteredProducts();
    }

    showProduct(element) {
        element.style.display = 'block';
        element.classList.remove('product-hidden');
        element.classList.add('product-visible');
        
        // Animar entrada
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 50);
    }

    hideProduct(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.classList.remove('product-visible');
        element.classList.add('product-hidden');
        
        // Ocultar completamente después de la animación
        setTimeout(() => {
            element.style.display = 'none';
        }, 300);
    }

    animateFilteredProducts() {
        const visibleProducts = this.products
            .filter(product => product.visible)
            .map(product => product.element);
        
        visibleProducts.forEach((product, index) => {
            product.style.animationDelay = `${index * 0.1}s`;
            product.classList.add('fade-in-up');
        });
    }

    updateResultsCount(count, category) {
        // Buscar o crear elemento para mostrar resultados
        let resultsElement = document.getElementById('filter-results');
        
        if (!resultsElement) {
            resultsElement = document.createElement('div');
            resultsElement.id = 'filter-results';
            resultsElement.className = 'filter-results';
            
            const catalogSection = document.getElementById('catalogo');
            const filtersElement = catalogSection.querySelector('.filters');
            filtersElement.insertAdjacentElement('afterend', resultsElement);
        }

        // Obtener nombre de categoría legible
        const categoryNames = {
            'todos': 'todos los productos',
            'tortas-cuadradas': 'tortas cuadradas',
            'tortas-circulares': 'tortas circulares',
            'postres-individuales': 'postres individuales',
            'sin-azucar': 'productos sin azúcar',
            'sin-gluten': 'productos sin gluten',
            'vegana': 'productos veganos'
        };

        const categoryName = categoryNames[category] || category;
        const resultsText = count === 1 
            ? `Mostrando 1 producto de ${categoryName}`
            : `Mostrando ${count} productos de ${categoryName}`;

        resultsElement.innerHTML = `
            <p class="results-text">
                ${resultsText}
                ${count === 0 ? '<span class="no-results">😔 No hay productos en esta categoría</span>' : ''}
            </p>
        `;

        // Animar el contador
        resultsElement.style.opacity = '0';
        setTimeout(() => {
            resultsElement.style.opacity = '1';
        }, 100);
    }

    // Funcionalidad de búsqueda adicional
    setupSearchFunctionality() {
        // Crear barra de búsqueda si no existe
        this.createSearchBar();
    }

    createSearchBar() {
        const filtersContainer = document.querySelector('.filters');
        if (!filtersContainer) return;

        // Verificar si ya existe la barra de búsqueda
        if (document.getElementById('product-search')) return;

        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container mb-md';
        searchContainer.innerHTML = `
            <div class="search-input-wrapper">
                <input type="text" 
                       id="product-search" 
                       placeholder="🔍 Buscar productos..." 
                       class="search-input">
                <button id="clear-search" class="clear-search-btn" style="display: none;">✕</button>
            </div>
        `;

        filtersContainer.insertAdjacentElement('beforebegin', searchContainer);

        // Event listeners para búsqueda
        const searchInput = document.getElementById('product-search');
        const clearButton = document.getElementById('clear-search');

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            this.searchProducts(searchTerm);
            
            clearButton.style.display = searchTerm ? 'block' : 'none';
        });

        clearButton.addEventListener('click', () => {
            searchInput.value = '';
            clearButton.style.display = 'none';
            this.filterProducts(this.currentFilter);
        });
    }

    searchProducts(searchTerm) {
        if (!searchTerm) {
            this.filterProducts(this.currentFilter);
            return;
        }

        let visibleCount = 0;
        
        this.products.forEach(product => {
            const matchesCategory = this.currentFilter === 'todos' || product.category === this.currentFilter;
            const matchesSearch = 
                product.title.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm);
            
            const shouldShow = matchesCategory && matchesSearch;
            
            if (shouldShow) {
                this.showProduct(product.element);
                product.visible = true;
                visibleCount++;
            } else {
                this.hideProduct(product.element);
                product.visible = false;
            }
        });

        this.updateSearchResults(visibleCount, searchTerm);
        this.animateFilteredProducts();
    }

    updateSearchResults(count, searchTerm) {
        let resultsElement = document.getElementById('filter-results');
        
        if (!resultsElement) {
            resultsElement = document.createElement('div');
            resultsElement.id = 'filter-results';
            resultsElement.className = 'filter-results';
            
            const searchContainer = document.querySelector('.search-container');
            searchContainer.insertAdjacentElement('afterend', resultsElement);
        }

        const categoryNames = {
            'todos': 'todos los productos',
            'tortas-cuadradas': 'tortas cuadradas',
            'tortas-circulares': 'tortas circulares',
            'postres-individuales': 'postres individuales',
            'sin-azucar': 'productos sin azúcar',
            'sin-gluten': 'productos sin gluten',
            'vegana': 'productos veganos'
        };

        const categoryName = categoryNames[this.currentFilter] || this.currentFilter;
        
        resultsElement.innerHTML = `
            <p class="results-text">
                Buscando "${searchTerm}" en ${categoryName}: 
                <strong>${count} resultado${count !== 1 ? 's' : ''}</strong>
                ${count === 0 ? '<span class="no-results">😔 No se encontraron productos</span>' : ''}
            </p>
        `;

        resultsElement.style.opacity = '0';
        setTimeout(() => {
            resultsElement.style.opacity = '1';
        }, 100);
    }

    // Métodos públicos para uso externo
    getFilteredProducts() {
        return this.products.filter(product => product.visible);
    }

    getCurrentFilter() {
        return this.currentFilter;
    }

    setFilter(category) {
        const filterButton = document.querySelector(`[data-filter="${category}"]`);
        if (filterButton) {
            this.setActiveFilter(filterButton, category);
            this.filterProducts(category);
        }
    }

    // Método para agregar estilos CSS necesarios
    addStyles() {
        if (document.getElementById('product-filter-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'product-filter-styles';
        styles.textContent = `
            .producto-card {
                transition: all 0.3s ease;
                opacity: 1;
                transform: translateY(0);
            }
            
            .product-hidden {
                opacity: 0 !important;
                transform: translateY(20px) !important;
            }
            
            .product-visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            .fade-in-up {
                animation: fadeInUp 0.6s ease forwards;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .search-container {
                text-align: center;
                margin-bottom: 2rem;
            }
            
            .search-input-wrapper {
                position: relative;
                display: inline-block;
                width: 100%;
                max-width: 400px;
            }
            
            .search-input {
                width: 100%;
                padding: 12px 20px;
                border: 2px solid #d4a574;
                border-radius: 25px;
                font-size: 16px;
                outline: none;
                transition: border-color 0.3s ease;
            }
            
            .search-input:focus {
                border-color: #b8956a;
                box-shadow: 0 0 10px rgba(212, 165, 116, 0.3);
            }
            
            .clear-search-btn {
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
                background: none;
                border: none;
                font-size: 18px;
                cursor: pointer;
                color: #666;
                padding: 0;
                width: 20px;
                height: 20px;
            }
            
            .filter-results {
                text-align: center;
                margin: 1rem 0 2rem 0;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 8px;
                transition: opacity 0.3s ease;
            }
            
            .results-text {
                margin: 0;
                color: #666;
                font-size: 14px;
            }
            
            .no-results {
                display: block;
                color: #dc3545;
                font-weight: bold;
                margin-top: 10px;
            }
            
            .filter-btn.active {
                background-color: #d4a574;
                color: white;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(212, 165, 116, 0.3);
            }
        `;
        
        document.head.appendChild(styles);
    }
}

// Inicializar el filtro cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Crear instancia global del filtro
    window.productFilter = new ProductFilter();
    
    // Agregar estilos CSS
    productFilter.addStyles();
    
    console.log('🔍 Filtro de productos de Pastelería 1000 Sabores inicializado');
});