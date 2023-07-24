import { Link, useNavigate } from 'react-router-dom';
import notFound from '../assets/images/opps.avif';
import { FaArrowLeft } from 'react-icons/fa';

const NotFoundPage = () => {

    const navigate = useNavigate;

    const handleBack = () => {
        navigate(-1);
    }


    return (
        <div>
            <div className="card-actions justify-center mt-10">
                <Link to='/'><button onClick={() => handleBack()} className="btn bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"><FaArrowLeft></FaArrowLeft>Back Home</button></Link>
            </div>
            <div className='flex justify-center'>
                <img src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFoundPage;