import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import UserInfo from './UserInfo';

const AllToys = () => {

    const allUsersInfo = useLoaderData();


    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-10'> All <span className='text-purple-500'>Toys</span> Page & User Information</h1>
            <div className='mt-10'>
                {
                    allUsersInfo.map(userInfo => <UserInfo

                        key={userInfo._id}
                        userInfo={userInfo}

                    ></UserInfo>)
                }
            </div>
        </div>
    );



};

export default AllToys;