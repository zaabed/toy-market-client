import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {

    const toyDetails = useLoaderData();
    const { name, details, picture_link } = toyDetails;

    return (
        <div className="card card-side bg-base-100 shadow-xl p-10 grid grid-cols-1 lg:grid-cols-2">
            <figure><img src={picture_link} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><b>Details: </b>{details}</p>
            </div>
        </div>
    );
};

export default ToyDetails;