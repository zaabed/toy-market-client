import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { loginUser, googleAuth, GitHubAuth } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('SuccessFully Login Your Account');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }

    const googleSignIN = () => {
        googleAuth()
            .then(result => {
                const loggedUser = result.user;
                setSuccess('SuccessFully Login Your Account');
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }

    const gitHubSignIN = () => {
        GitHubAuth()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('SuccessFully Login Your Account');
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }


    return (
        <div>
            <div className="hero min-h-screen bg-purple-50 mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        {/* ----Check  Successful Login---- */}
                        {
                            error &&
                            <div className="alert alert-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{error}</span>
                            </div>
                        }

                        {
                            success &&
                            <div className="alert alert-success">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{success}</span>
                            </div>
                        }

                        <h1 className="text-5xl font-bold">Login Now!</h1>
                        <p className="py-6">It allows them to share ideas about recipes, products or cooking techniques.If you are interest for cooked some delicious recipe please SignUp.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Login</button>
                            </div>
                            <p>New User? please <Link to='/signUp'><b>SignUp</b></Link> </p>
                            <hr className='mt-4' />
                            <p className='text-sm'><b>Login Another Way</b></p>
                            <div className='flex mx-auto text-4xl mt-3'>
                                <Link><FaGoogle onClick={googleSignIN} className='me-3 p-1 rounded'></FaGoogle></Link>
                                <Link><FaGithub onClick={gitHubSignIN} className=' p-1'></FaGithub></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;