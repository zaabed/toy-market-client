import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({ userInfo }) => {

    const { _id, toyName, availableQuantity, price, sellerEmail, sellerName } = userInfo;


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <tbody>
                        <tr>
                            <td><b>SellerName: {sellerName}</b></td>
                            <td><b>{sellerEmail}</b></td>
                            <td><b>ToyName: {toyName}</b></td>
                            <td><b>Price: ${price}</b></td>
                            <td><b>Quantity: {availableQuantity}</b></td>
                            <td>
                                <Link to={`/allToys/${_id}`}><button className="btn bg-amber-300 btn-2xl">details</button></Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

};


export default UserInfo;