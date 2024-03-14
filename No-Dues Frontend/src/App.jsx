import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginDep from './pages/LoginDep'
import StudDash from './pages/StudDash'
import New from './pages/New'
import Nav from './components/Nav'
import AuthState from './context/auth/authState'
import CallBack from './pages/CallBack'
import DepDash from './pages/DepDash'

const App = () => {
  return (
    <AuthState>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/stud' element={<StudDash />} />
          <Route path='/login-dep' element={<LoginDep />} />
          <Route path='/callback' element={<CallBack />} />
          <Route path='/dep' element={<DepDash/>} />
        </Routes>
      </BrowserRouter>
    </AuthState>
  )
}

export default App
