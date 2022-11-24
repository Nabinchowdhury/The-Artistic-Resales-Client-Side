
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Spinner from "../../Spinner/Spinner";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, googleSignIn, user, setLoading } = useContext(AuthContext)
    const [signInError, setSignInError] = useState("")
    const [showSpinner, setShowSpinner] = useState(false)
    const navigate = useNavigate()

    const saveUserToDb = (name, email, type) => {
        const user = { name, email, type }
        console.log(user)
    }

    const handleLogin = data => {
        setShowSpinner(true)
        setSignInError('')

        const email = data.email
        const password = data.password

        signIn(email, password)
            .then((result) => {
                const currentUser = result.user
            }).catch(err => {
                setSignInError(err.message)
            }).finally(() => {
                setShowSpinner(false)
                setLoading(false)
            })


    }

    const handleGoogleSignin = () => {
        setShowSpinner(true)
        setSignInError("")
        googleSignIn()
            .then((result) => {
                const user = result.user
                toast.success('Sign in SuccessFull')
                saveUserToDb(user?.displayName, user?.email, "Buyer")
                navigate("/")

            }).catch(err => {
                setSignInError(err.message)
            }).finally(() => {
                setShowSpinner(false)
                setLoading(false);
            })
    }

    if (user) {
        return navigate('/')
    }

    return (
        <div className='flex justify-center items-center mt-20'>
            <div className='w-96 p-7'>
                {
                    showSpinner && <Spinner></Spinner>
                }
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