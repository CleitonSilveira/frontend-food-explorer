import { Route, Routes } from 'react-router-dom';

// importar as páginas
 import { SignIn } from '../pages/SignIn';
//  import { SignUp } from '../pages/SignUp';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      {/* <Route path="/register" element={<SignUp />} />       */}
    </Routes>
  )
}