import React, { useState } from 'react'
import Container from './Container'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    let [eyeShow, seteyeShow] = useState(false)
    const db = getDatabase();
    const auth = getAuth();
    let navigate = useNavigate('')
    let [password, setpassword] = useState('')
    let [email, setemail] = useState('')
    let [name, setname] = useState('')
   


    let handelclick = (()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
                toast('succesfull , Go to log in page')
                setTimeout(()=>{
                    navigate("/login")
                },2000)
            }).then(() => {
                set(ref(db, 'user/' + user.user.uid), {
                    username: name,
                    email: email,

                });
            });
        })
        .catch((error) => {
            toast('Fill up Task')
            const errorCode = error.code;
            const errorMessage = error.message;

            
            
        });
    })
 
  



    return (
        <div className=' py-[100px]'>
            <Container>
                <div className="">
                    <div className=" mx-auto w-[400px] text-center bg-cyan-600  ">

                        <div className="">
                            <h2 className=' font-sans font-bold text-[35px] text-black py-[20px]'>Sing Up</h2>
                        </div>
                        <div onChange={(e) => setname(e.target.value)} className="">
                            <input type="text" className=' outline-none bg-cyan-600 h-[40px] w-[300px] font-sans font-medium text-[15px] text-black py-[20px]' placeholder='Name' />
                        </div>
                        <div onChange={(e) => setemail(e.target.value)} className="">
                            <input type="email" name="" id="" className=' outline-none bg-cyan-600 h-[40px] w-[300px] font-sans font-medium text-[15px] text-black py-[20px]' placeholder='Email' />
                        </div>
                        <div onChange={(e) => setpassword(e.target.value)}  className=" relative">
                            <input onClick={() => seteyeShow(!eyeShow)} type={eyeShow == true ? 'password' : 'text'} name="" className='outline-none bg-cyan-600 h-[40px] w-[300px] font-sans font-medium text-[15px] text-black py-[20px]' id="" placeholder='Password' />
                            <div className=" absolute top-[10px] right-[100px]">
                                {eyeShow == true ? <IoMdEyeOff /> : <IoMdEye />}
                            </div>
                        </div>
                      
                            <div onClick={handelclick} className="  py-[8px] px-[15px] inline-block rounded-sm bg-indigo-700 my-[20px]">
                                <button className=' font-sans font-semibold text-[18px] text-white'>Sing up</button>
                                <ToastContainer />
                            </div>
                            
            
                        <div className=" flex gap-x-3 justify-center py-[30px]">
                            <p className=' font-sans font-medium text-[15px] text-black'>Already have an account?</p>
                            <div className="">
                               <Link to={'/login'}>
                                <button className='font-sans font-medium text-[15px] text-[red]'>Log In</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Home