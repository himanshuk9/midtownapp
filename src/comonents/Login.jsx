import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();
    const [userdetail, setUserDetail] = useState({
        username: "",
        password: ""
    })

    function handleUsername(e) {
        let localData = { ...userdetail }

        localData.username = e.target.value;

        setUserDetail(localData)

    }
    function handlePassword(e) {
        let localData = { ...userdetail }

        localData.password = e.target.value;

        setUserDetail(localData)
    }

    function handleLogin() {
        if (localStorage.getItem('mern')) {
            let alldata = JSON.parse(localStorage.getItem('mern'))
            let flag = false;
            alldata.map(e => {
                if (e.username === userdetail.username && e.password === userdetail.password)
                    flag = true;
            })
            if (flag) {
                setTimeout(() =>
                    navigate('/'), 1000)
            }
            else {
                toast.error('Invaid  Credentials...')
            }
        }
    }

    return (
        <>
            <Toaster />
            <div className='shadow p-4 w-50 m-auto mt-5' id='login'>
                <h1 className='alert alert-secondary text-center'>Login Page</h1>
                <input type="text" placeholder='Enter username' className='form-control my-3' onChange={handleUsername} />
                <input type="text" placeholder='Enter password' className='form-control my-3' onChange={handlePassword} />

                <button className='btn btn-sm btn-warning text-white text-uppercase w-25 m-auto d-block' onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}
export default Login