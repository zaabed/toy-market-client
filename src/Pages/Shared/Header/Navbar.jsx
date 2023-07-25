import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo.jpeg'
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    return (
        <div className="navbar bg-purple-50 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="font-bold "><Link to='/'>Home</Link></li>
                        <li className="font-bold"><Link to='/allToys'>All Toys</Link></li>
                        <li className="font-bold"><Link to='/blogs'>Blogs</Link></li>

                        {
                            user &&

                            <>
                                <li className="font-bold"><Link to='/addToy'>Add Toy</Link></li>
                                <li className="font-bold"><Link to='/myToy'>My Toy</Link></li>
                            </>

                        }

                    </ul>
                </div>

                <div className="flex justify-center items-center">
                    <Link><img src={logo} className='w-32 h-24 rounded-md' alt="" /></Link>
                    <h3 className="font-extrabold text-3xl">TOY <span className="text-purple-500">TITANS</span></h3>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="font-bold"><Link to='/'>Home</Link></li>
                    <li className="font-bold"><Link to='/allToys'>All Toys</Link></li>
                    <li className="font-bold"><Link to='/blogs'>Blogs</Link></li>

                    {
                        user &&

                        <>
                            <li className="font-bold"><Link to='/addToy'>Add Toy</Link></li>
                            <li className="font-bold"><Link to='/myToy'>My Toy</Link></li>
                        </>

                    }

                </ul>
            </div>

            <div className="navbar-end flex items-start">

                <div className='mx-2'>
                    {user &&
                        <span>
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <button><img className='w-12 h-12 rounded-md' src={user.photoURL} alt="" /></button>
                            </div>
                        </span>
                    }
                </div>

                <div>
                    {
                        user ?
                            <>
                                <button onClick={handleLogOut} className="btn bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">LogOut</button>

                            </> :
                            <Link to='/login'><button className="btn bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Login</button>
                            </Link>

                    }

                </div>

            </div>

        </div>
    );
};

export default Navbar;