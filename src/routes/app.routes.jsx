import { Route, Routes } from 'react-router-dom';

// importar as páginas
// import { Home } from '../pages/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/add-dish" element={<AddDish />} />
      <Route path="/edit-dish/:id" element={<EditDish />} />
    </Routes>
  )
}