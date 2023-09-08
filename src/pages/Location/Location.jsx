import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaSearchLocation } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';

const Location = () => {
    return (
        <div className="grid md:grid-cols-3 w-full  mb-10 p-5">

            <div className="card w-48 bg-orange-100 shadow-xl">
                <div className="bg-orange-200 text-center text-white flex justify-center p-4">
                    <LuPhoneCall />
                </div>
                <div className="card-body p-4 text-center">
                    <h2 className="uppercase">Phone</h2>
                    <p>+88 01989214721</p>
                </div>
            </div>
            <div className="card w-48 bg-orange-100 shadow-xl">
                <div className="bg-orange-200 text-center  flex justify-center p-4">
                    <FaSearchLocation className="text-white" />
                </div>
                <div className="card-body p-4 text-center">
                    <h2 className="uppercase">Address</h2>
                    <p>Uttara,Dhaka-1230</p>
                </div>
            </div>
            <div className="card w-48 bg-orange-100 shadow-xl">
                <div className="bg-orange-200 text-center text-white flex justify-center p-4">
                    <AiOutlineClockCircle />
                </div>
                <div className="card-body p-4 text-center">
                    <h2 className="uppercase">Working Hour</h2>
                    <p>10:00am - 09:00pm</p>
                </div>
            </div>
        </div>
    );
};

export default Location;