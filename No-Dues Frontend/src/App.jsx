import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginDep from './pages/LoginDep'
import StudDash from './pages/StudDash'
import New from './pages/New'
import AuthState from './context/auth/authState'
import CallBack from './pages/CallBack'
import DepDash from './pages/DepDash'
import Due from './pages/Due'

const App = () => {
  return (
    <AuthState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/stud' element={<StudDash />} />
          <Route path='/login-dep' element={<LoginDep />} />
          <Route path='/callback' element={<CallBack />} />
          <Route path='/dep' element={<DepDash/>} />
          <Route path='/dues' element={<Due/>} />
        </Routes>
      </BrowserRouter>
    </AuthState>
  )
}

export default App
