import React, { useState } from 'react'
import Container from './Container'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    let [eyeShow, seteyeShow] = useState(false)
    const auth = getAuth();
    let [email , setemail] = useState(false)
    let [password , setpassword] = useState(false)
    let navigate = useNavigate()

    let handellogIn = (() => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                toast('succesfull')
                setTimeout(()=>{
                    navigate('/myacc')
                },1000)
            })
            .catch((error) => {
                toast('inval')
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    })

    return (

        <div className=' py-[100px]'>
            <Container>
                <div className="mx-auto w-[400px] text-center bg-cyan-600">
                    <div className="">
                        <h2 className='font-sans font-bold text-[30px] text-black py-[20px]'>Log In</h2>
                    </div>
                    <div onChange={(e)=>setemail(e.target.value)} className="">
                        <input type="email" name="" id="" className='outline-none bg-cyan-600 h-[40px] w-[300px] font-sans font-medium text-[15px] text-black py-[20px]' placeholder='Email' />
                    </div>
                    <div onChange={(e)=>setpassword(e.target.value)} className=" relative ">
                        <input onClick={() => seteyeShow(!eyeShow)} type={eyeShow == true ? 'password' : 'text'} className='outline-none bg-cyan-600 h-[40px] w-[300px] font-sans font-medium text-[15px] text-black py-[20px]' placeholder='Password' name="" id="" />
                        <div className=" absolute top-[10px] right-[100px] ">
                            {eyeShow == true ? <IoMdEyeOff /> : <IoMdEye />}
                        </div>
                    </div>
                    <div onClick={handellogIn} className="py-[8px] px-[15px] inline-block rounded-[5px] bg-indigo-700 my-[20px]">
                        <button className=' font-sans font-semibold text-[18px] text-white'>Log In</button>
                        <ToastContainer />
                    </div>
                    <div className=" flex gap-x-[20px] justify-center py-[30px]">
                        <div className="">
                            <p className='font-sans font-medium text-[15px] text-black'>Don't Have an account?</p>
                        </div>
                        <div className="">
                            <Link to={'/'}>
                                <button className='font-sans font-medium text-[15px] text-[red]'>Registration</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Login