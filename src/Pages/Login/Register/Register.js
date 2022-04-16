import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import FacbookIcon from '../../../images/icons/fb.png'
import GoogleIcon from '../../../images/icons/google.png'

const Register = () => {
    return (
        <div className='min-h-[100vh] text-black flex justify-center items-center mt-10'>
            <div>
                <section className='border px-10 py-5 rounded-lg'>
                    <h1 className='text-2xl font-semibold text-center text-amber-600'>Create an account</h1>
                    <form className='form'>
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                        <input type="email" placeholder='Email' required />
                        <input type="password" placeholder='Password' required />
                        <input type="password" placeholder='Confirm Password' required />
                        <input className='bg-amber-600 font-semibold mt-8 rounded-md hover:bg-amber-500 duration-200 ease-in' type="submit" value="Create an account" />
                    </form>
                    <Link to='/login'><p className='text-center my-2 font-semibold opacity-60 hover:opacity-100 hover:text-amber-600'><small>Already have account?</small></p></Link>
                </section>
                <section className='my-5'>
                    <div className='flex items-center justify-center'>
                        <div className='w-[200px] h-[1px] bg-slate-300'></div>
                        <p className='px-2'>or</p>
                        <div className='w-[200px] h-[1px] bg-slate-300'></div>
                    </div>
                    <div className='flex flex-col items-center my-5'>
                        <button className='border px-8 py-2 rounded-full flex items-center gap-5 hover:border-amber-600'>
                            <img className='h-8' src={FacbookIcon} alt="" />
                            <p className='font-semibold'>Continue with Facebook</p>
                        </button>
                        <button className='border px-8 py-2 rounded-full flex items-center gap-5 hover:border-amber-600 mt-3'>
                            <img className='h-7' src={GoogleIcon} alt="" />
                            <p className='font-semibold'>Continue with Google</p>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Register;