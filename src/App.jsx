import Registro from './components/pages/Registro';
import Login from './components/pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/registro' element={<Registro />} />  {/* Agrega esta ruta */}
      </Routes>
    </BrowserRouter>
  );
}
