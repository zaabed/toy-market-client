import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // -----email password validation-----

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Please At Least Two Upper Case');
            return;
        }

        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please At Least two Number');
            return;
        }

        else if (password.length < 6) {
            setError('Please Add At Least Six Character In Your Password');
            return;
        }


        createUser(email, password)
            .then(result => {
                const registerUser = result.user;
                form.reset();
                setSuccess('User Has Created Successfully Account');
            })
            .catch(error => {
                setError(error.message)
            })

    }

    return (
        <div className="hero min-h-screen bg-purple-50 mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    {/* ----email password validation and create account successful check---- */}

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

                    <h1 className="text-5xl font-bold">SignUp Now!</h1>
                    <p className="py-6">It allows them to share ideas about recipes, products or cooking techniques.If you are interest for cooked some delicious recipe please SignUp. </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
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
                            <button className="btn bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">SignUp</button>
                        </div>
                        <p>Already have an account? please <Link to='/login'><b>Login</b></Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;