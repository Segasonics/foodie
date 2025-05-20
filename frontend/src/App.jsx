import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import EmailVerificationPage from './pages/EmailVerificationPage'
import CategoriesPage from './pages/CategoriesPage'
import AdminPage from './pages/AdminPage'
import PlansPage from './pages/PlansPage'
import PurchaseSuccessPage from './pages/PurchaseSuccessPage'
import { useAuthStore } from './store/authStore'
import PurchaseCancelPage from './pages/PurchaseCancelPage'
import { Toaster } from 'react-hot-toast'

function App() {
  const { user } = useAuthStore();
  const location = useLocation();
  const hideFooterRoutes = ['/login', '/signup','/admin'];

  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/category/:category' element={<CategoriesPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/verify-email' element={<EmailVerificationPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/plans' element={user ? <PlansPage /> : <Navigate to='/' />} />
        <Route path='/purchase-success' element={<PurchaseSuccessPage />} />
        <Route path='/purchase-cancel' element={<PurchaseCancelPage />} />
      </Routes>
       {shouldShowFooter && <Footer />}
      <Toaster />
    </>
  )
}

export default App
