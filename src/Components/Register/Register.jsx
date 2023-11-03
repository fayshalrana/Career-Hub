import React, { useContext, useState } from 'react'
import { FaPhotoVideo, FaPencilAlt, FaEnvelope } from "react-icons/fa";
import { BiLockAlt, BiLock } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {


    const {registerUser, userData, updateUserProfile} = useContext(authContext)
    const handleRegister = event => {
        event.preventDefault();
        //Get information from form
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.PhotoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log( email, password)
        
        
        // password validation
        if (!/(?=.*[A-Z])/.test(password)) {
            toast.error("At least one uppercase character");
            return;
        } else if (!/(?=.*\d)/.test(password)) {
            toast.error("At least one digit");
            return;
        } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            toast.error("At least one special character");
            return;
        } else if (password.length < 6) {
            toast.error("Minimum 6 characters");
            return;
        } else if (password != confirmPassword) {
            toast.error("Password dosn't match");
            return;
        }

        registerUser(email, password)
        .then(result =>{
            const user = result.user;
           toast.success("Registiton successful..")
           form.reset();
           updateUserProfile(user, name, photoUrl)
           .then(result =>{
            const user = result.user;
           })
           .catch(error =>{
            const err = error.message;
           })
        })
        .catch(error =>{
            const err = error.message;
            toast.error(err)
        })
    }
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword =()=>{
        setShowPassword(!showPassword)
    }

  return (
   <>
     <div style={{ padding: '6rem 0 3rem', height: "100%" }} className="h-screen flex justify-center items-center">

<div className="flex flex-col w-full max-w-md px-4 py-8 bg-black bg-opacity-40 backdrop-blur-sm rounded-lg shadow  sm:px-6 md:px-8 lg:px-10">
    <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        Create a new account
    </div>
   
    <div className="mt-8">
        <form onSubmit={handleRegister} autoComplete="off">
            <div className="flex flex-col mb-2">
                <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <FaPencilAlt style={{ width: '20px' }}></FaPencilAlt>
                    </span>
                    <input type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your name" name='name' />
                </div>
            </div>
            <div className="flex flex-col mb-2">
                <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <FaPhotoVideo style={{ width: '20px' }}></FaPhotoVideo>
                    </span>
                    <input type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Photo Url" name='PhotoURL' />
                </div>
            </div>
            <div className="flex flex-col mb-2">
                <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <FaEnvelope style={{ width: '20px' }} />
                    </span>
                    <input type="email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email" name='email' required />
                </div>
            </div>
            <div className="flex flex-col mb-2">
                <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <BiLockAlt style={{ width: '20px' }}></BiLockAlt>
                    </span>
                    <input type={showPassword? "text" : "password"} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password" name='password' required />
                </div>
            </div>
            <div className="flex flex-col mb-6">
                <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <BiLock style={{ width: '20px' }}></BiLock>
                    </span>
                    <input type={showPassword? "text" : "password"}  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Confirm password" name='confirmPassword' required />
                </div>
            </div>
            <div className="mb-3">
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input onClick={handleShowPassword} type="checkbox" name="toggle" id="Orange" className="checked:bg-yellow-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-black border-4 appearance-none cursor-pointer" />
                    <label htmlFor="Orange" className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
                    </label>
                </div>
                <span className="font-medium text-white">
                    Show password
                </span>
            </div>
            <div className="flex w-full">
                <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Register
                </button>
            </div>
        </form>
    </div>
    <div className="flex items-center justify-center mt-6">
        <label className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
            <span className="ml-2  text-black font-bold">
                Already have an account? <Link id='login' to='/login'>Login</Link>
            </span>
        </label>
    </div>
</div>

</div>
   </>
  )
}

export default Register
