import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from './modules/seguranca/login'
import { MilitarRoutes } from '../src/modules/militar/routes';
import { ProtectedLayout } from './modules/seguranca/ProtectedLayout'
import { AdmRoutes } from './modules/admp4/routes';

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path='/*'
          element={
            <ProtectedLayout>
              <MilitarRoutes />
            </ProtectedLayout>
          }
        />
        <Route
          path='/*'
          element={
            <ProtectedLayout>
              <AdmRoutes />
            </ProtectedLayout>
          }
        />
       
      </Routes>
    </BrowserRouter>
  )
}
