import notFound from '../assets/images/opps.avif';

const NotFoundPage = () => {
    return (
        <div className='flex justify-center'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFoundPage;