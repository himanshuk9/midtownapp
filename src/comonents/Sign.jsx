import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

function Sign() {
    const navigation = useNavigate();
    const [userdetail, setUserDetail] = useState({})


    function handleUserData(e) {
        setUserDetail({ ...userdetail, [e.target.name]: e.target.value })

    }

    function validateName(name) {
        // Example: Name should be at least 2 characters long
        return name.length >= 2;
    }


    function handleLogin() {
        if (!userdetail.fname || !userdetail.address || !userdetail.username || !userdetail.password || !userdetail.cpassword) {
            toast.error('Please fill all the fields');
            return;
        }

        if (!validateName(userdetail.fname)) {
            toast.error('Name invalid');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if username is a valid email
        if (!emailRegex.test(userdetail.username)) {
            toast.error('Please enter a valid email address');
            return;
        }

        if (userdetail.password === userdetail.cpassword) {
            let previousData = JSON.parse(localStorage.getItem('mern'));
            let flag = false;
            previousData.map(e => {
                if (e.username === userdetail.username) {
                    flag = true
                }
            })

            if (flag) {

                toast.error("error exist already")
            }
            else {
                let newData = previousData.concat(userdetail);
                localStorage.setItem('mern', JSON.stringify(newData));
                toast.success("user registerd successfully")
                setUserDetail({
                    fname: "",
                    address: "",
                    username: "",
                    password: "",
                    cpassword: ""
                })

                setTimeout(() =>
                    navigation('/Login'), 3000)
            }

        }
        else {
            toast.error("password doesn't match")

        }
    }

    useEffect(() => {
        if (!localStorage.getItem('mern')) {
            localStorage.setItem('mern', JSON.stringify([]))
        }
    }, [])

    return (
        <>
            <Toaster />
            <div className='shadow p-4 w-50 m-auto mt-5 ' id='register' >
                <h1 className='alert alert-secondary text-center'>Register Page</h1>
                <input type="text" placeholder='Enter Name' name='fname' value={userdetail.fname} className='form-control my-3' onChange={handleUserData} />

                <input type="text" placeholder='Enter address' name='address' value={userdetail.address} className='form-control my-3' onChange={handleUserData} />

                <input type="text" placeholder='Enter your gmail' name='username' value={userdetail.username} className='form-control my-3' onChange={handleUserData} />

                <input type="text" placeholder='Enter password' name='password' value={userdetail.password} className='form-control my-3' onChange={handleUserData} />

                <input type="text" placeholder='Enter confirm password' name='cpassword' value={userdetail.cpassword} className='form-control my-3' onChange={handleUserData} />



                <button className='btn btn-sm btn-warning text-white  w-25 m-auto d-block' onClick={handleLogin}><b>Sign</b></button>
            </div>
        </>
    )
}
export default Sign;