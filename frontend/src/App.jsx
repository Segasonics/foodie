import { Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import EmailVerificationPage from './pages/EmailVerificationPage'
import CategoriesPage from './pages/CategoriesPage'
import AdminPage from './pages/AdminPage'
import PlansPage from './pages/PlansPage'

function App() {

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
        <Route path='/plans' element={<PlansPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
