
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext)
    const [signInError, setSignInError] = useState("")

    const handleLogin = data => {
        console.log(data)
    }

    const handleGoogleSignin = () => {
        googleSignIn()
            .then(() => {
                toast.success('Sign in SuccessFull')
                setSignInError("")
            }).catch(err => {
                // console.log(err.message)
                setSignInError(err.message)
            })
    }
    return (
        <div className='flex justify-center items-center mt-20'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center font-semibold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
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
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn w-full' value="Login" type="submit" />
                    <div>
                        {
                            signInError && <p className='text-red-600'>{signInError}</p>
                        }
                    </div>
                </form>
                <p>New to our Website? <Link className='text-primary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full' onClick={handleGoogleSignin}>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;