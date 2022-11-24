import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Spinner from '../../Spinner/Spinner';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { googleSignIn } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState("")
    const [showSpinner, setShowSpinner] = useState(false)
    const navigate = useNavigate()


    const handleSignUp = data => {
        console.log(data)
    }

    const handleGoogleSignin = () => {
        setShowSpinner(true)
        googleSignIn()
            .then((result) => {
                const user = result.user
                toast.success('Sign in SuccessFull')
                setSignUpError("")
                saveUserToDb(user?.displayName, user?.email, "Buyer")
                navigate("/")
            }).catch(err => {
                setSignUpError(err.message)
            }).finally(() => {
                setShowSpinner(false)
            })

    }

    const saveUserToDb = (name, email, type) => {
        const user = { name, email, type }
        console.log(user)
    }

    return (
        <div className='flex justify-center items-center mt-20'>

            <div className='w-96 p-7'>
                {
                    showSpinner && <Spinner></Spinner>
                }
                <h2 className='text-3xl text-center font-semibold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />

                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Account Type</span></label>
                        <div className='flex items-center'>
                            <input type="radio" name="radio-1" className="radio" value="Buyer"   {...register("type", {
                                required: "Select an account type"
                            })} />
                            <label className="label"> <span className="label-text">Buyer</span></label>
                        </div>
                        <div className='flex items-center'>
                            <input type="radio" name="radio-1" className="radio" value="Seller"  {...register("type", {
                                required: "Select an account type"
                            })} />
                            <label className="label"> <span className="label-text">Seller</span></label>
                        </div>
                        {errors.type && <p className='text-red-600'>{errors.type?.message}</p>}
                    </div>

                    <input className='btn w-full mt-5' value="Sign Up" type="submit" />
                    <div>
                        {
                            signUpError && <p className='text-red-600'>{signUpError}</p>
                        }
                    </div>
                </form>
                <p>Already have an Account? <Link className='text-primary' to="/login">Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full' onClick={handleGoogleSignin}>Sign In With Google</button>
            </div>
        </div>
    );
};


export default SignUp;