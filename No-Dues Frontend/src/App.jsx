import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginDep from './pages/LoginDep'
import LoginStud from './pages/LoginStud'
import New from './pages/New'
import Nav from './components/Nav'
import AuthState from './context/auth/authState'
import CallBack from './pages/CallBack'

const App = () => {
  return (
    <AuthState>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/login-stud' element={<LoginStud />} />
          <Route path='/login-dep' element={<LoginDep />} />
          <Route path='/callback' element={<CallBack />} />
        </Routes>
      </BrowserRouter>
    </AuthState>
  )
}

export default App
