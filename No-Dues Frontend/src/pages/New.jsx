import { useRecoilValue } from 'recoil'
import logo from '/logo1.jpg'
import { authState, userTypeValues } from '../context/auth/authState';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const New = () => {
    const context = useRecoilValue(authState);
    const { token , userType } = context;
    const backendUri = 'http://localhost:8000'
    const navigator  = useNavigate();

    const handleDepGET = async () => {
        if(token === null ||  userType !== userTypeValues.department ){
            navigator('/login-dep');
        }

        const response = await fetch(`${backendUri}/department/login`,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })

        const resp = await response.json();
        console.log(resp);

    }

    const handleLogin = async() => {
        console.log('login clicked')
    }

    return (
        <div className='flex flex-col'>
            <div className="flex items-center justify-center">
                <img src={logo} alt="Your Image" className="w-40 h-40 object-cover rounded-full  border border-black mt-10" />
            </div>
            <div className='flex justify-center items-center m-16 text-3xl'>
                <strong>No Dues Platform</strong>
            </div>
            <div className='flex justify-center space-x-10'>
                <button
                    onClick={handleLogin}
                    className="bg-[#2563eb] text-white p-3 hover:bg-blue-700  font-bold py-2 px-4 rounded transition-transform transform hover:-translate-y-2"
                >
                    Login As Student
                </button>
                <button
                    onClick={handleDepGET}
                    className="bg-[#172554] p-3 hover:bg-[#60a5fa]-700 text-white font-bold transition-transform transform hover:-translate-y-2 py-2 px-4 rounded mr-6"
                >
                    Login As Departments
                </button>
            </div>
        </div>
    )
}

export default New
