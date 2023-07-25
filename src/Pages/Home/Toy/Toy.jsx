import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    const { _id, name, picture_link, price, rating } = toy;
    return (

        <div className="card w-96 glass" data-aos="zoom-in">
            <figure><img src={picture_link} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <p>{rating}</p>
                <div className=" card-actions justify-end mt-10">
                    <Link to={`/${_id}`}><button className="btn bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">VIEW DETAILS</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Toy;