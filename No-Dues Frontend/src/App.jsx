import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
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
import CommunicationPage from './pages/Communication';
import NotFoundPage from './pages/NotFound';
import DepartmentCertificate from './pages/DepartmentCertificate';
import DepartmentRequest from './pages/DepartmentRequests';

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<New />} />
          <Route path='/stud' element={<StudDash />} />
          <Route path='/stud-dues' element={<StudDues />} />
          <Route path='/callback' element={<CallBack />} />
          <Route path='//department-dues' element={<Due />} />
          <Route path='/department-dashboard' element={<DepDash />} />
          <Route path='/department-communication' element={<CommunicationPage />} />
          <Route path='/department-certificates' element={<DepartmentCertificate />} />
          <Route path='/department-requests' element={<DepartmentRequest />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </RecoilRoot>
  );
}

export default App;
