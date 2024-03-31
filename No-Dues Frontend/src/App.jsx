import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginDep from './pages/LoginDep';
import StudDash from './pages/StudDash';
import New from './pages/New';
import CallBack from './pages/CallBack';
import DepDash from './pages/DepDash';
import Due from './pages/Due';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import DepartmentLayout from './pages/_departmentLayout';
import StudDues from './pages/StudDues';

const App = () => {
  return (
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/' element={<New />} />
            <Route path='/stud' element={<StudDash />} />
            <Route path='/stud-dues' element={<StudDues />} />
            <Route path='/login-dep' element={<LoginDep />} />
            <Route path='/callback' element={<CallBack />} />
            <Route path='/dep' element={<DepDash />} />
          <Route path='/dues' element={<DepartmentLayout><Due /></DepartmentLayout>} />
          </Routes>
        </BrowserRouter>
      <ToastContainer />
    </RecoilRoot>
  );
}

export default App;
