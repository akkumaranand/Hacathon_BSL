import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Dashboardform = () => {
    const Nevigate = useNavigate();
    const [formData, setDataform] = useState({
        busName: "",
        busPlateNo: "",
        busOwnerName: "",
        OwnerMob: "",
        driverName: "",
        DriverMob: "",
        TotalCapacity: "",
        Remark: "",
        source: "",
        Destination: ""


    })
    const [onsubmit , setonsubmit] = useState(false);

    function changehandler(event) {
        setDataform((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }))
    }

   
    function submitHandler(event) {
        event.preventDefault();
        setonsubmit(true);
        toast.success("Suceesfully Bus is Added");
        Nevigate("/");

        const accountData = {
            ...formData
        }

        console.log("Printing Final account Data ");
        console.log(accountData);
        // nevigate("./dashboard")
    }
    return ( 
   

        <div className='dashboardForm'>

            <form onSubmit={submitHandler} className='dashboardtextform' >
                {/*first name and lastName  */}
                <div className='textdivdashboard flex flex-row   gap-5' >
                    <div className='leftformdiv' >

                        <label className='mt-4'>
                            <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375] '>BUS NAME:- <sup className='text-pink-200' >*</sup></p>
                            <input
                                required
                                type="text"
                                name="busName"
                                placeholder=''
                                onChange={changehandler}
                                value={formData.busName}
                                className='textdivsize w-full flex justify-center items-center rounded-[8px]  text-richblack-100
                                                 border border-richblack-2 px-[12px] py-[8px] gap-x-2 mt-0'
                            />

                        </label>




                        <label className='mt-4'>
                            <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]' >BUS OWNER NAME:-<sup className='text-pink-200'>*</sup></p>
                            <input
                                required
                                type="text"
                                name="busOwnerName"
                                placeholder=''
                                onChange={changehandler}
                                value={formData.busOwnerName}
                                className='textdivsize w-full flex justify-center items-center rounded-[8px]  text-richblack-100
                                                border border-richblack-2 px-[12px] py-[8px] gap-x-2 mt-0'
                            />
                        </label>




                        <label className='mt-4'>
                            <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]' >DRIVER NAME:- <sup className='text-pink-200'>*</sup></p>
                            <input
                                required
                                type="text"
                                name="driverName"
                                placeholder=''
                                onChange={changehandler}
                                value={formData.driverName}
                                className='textdivsize w-full flex justify-center items-center rounded-[8px]  text-richblack-100
                                                 border border-richblack-2 px-[12px] py-[8px] gap-x-2 mt-0'
                            />
                        </label>


                        <label className='mt-4'>
                            <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]' >TOTAL CAPACITY <sup className='text-pink-200'>*</sup></p>
                            <input
                                required
                                type="number"
                                name="TotalCapacity"
                                placeholder=''
                                onChange={changehandler}
                                value={formData.TotalCapacity}
                                className='textdivsize w-full flex justify-center items-center rounded-[8px] text-richblack-100
                                                 border border-richblack-2 px-[12px] py-[8px] gap-x-2 mt-0'
                            />
                        </label>
                        <div className='sourcedestination'>

                            <label className='mt-4'>
                                <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]' >SOURCE<sup className='text-pink-200'>*</sup></p>
                                <input
                                    required
                                    type="text"
                                    name="source"
                                    placeholder=''
                                    onChange={changehandler}
                                    value={formData.source}
                                    className=' sourcedisdiv w-full flex justify-center items-center rounded-[8px] text-richblack-100
                                                border border-richblack-2 px-[12px] py-[8px] gap-x-2 mt-0'
                                />
                            </label>
                            <label className='mt-4'>
                                <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]' >DESTINATION <sup className='text-pink-200'>*</sup></p>
                                <input
                                    required
                                    type="text"
                                    name="Destination"
                                    placeholder=''
                                    onChange={changehandler}
                                    value={formData.Destination}
                                    className='sourcedisdiv w-full flex justify-center items-center rounded-[8px] text-richblack-100
                                                border border-richblack-2 px-[12px] py-[8px] gap-x-2 mt-0'
                                />
                            </label>
                        </div>
                    </div>

                    <div className='rightformdiv'>
                        <label className='mt-4'>
                            <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]' >BUS PLATE NO:- <sup className='text-pink-200'>*</sup></p>
                            <input
                                required
                                type="tel"
                                name="busPlateNo"
                                placeholder=''
                                onChange={changehandler}
                                value={formData.busPlateNo}
                                className='textdivsize w-full flex justify-center items-center rounded-[8px]  text-richblack-100
                                                 border border-richblack-2 px-[12px] py-[8px] gap-x-2 mt-0'
                            />
                        </label>


                        <label className='mt-4'>
                            <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]' >BUS OWNER MOBILE NO:-<sup className='text-pink-200'>*</sup></p>
                            <input
                                required
                                type="text"
                                name="OwnerMob"
                                placeholder=''
                                onChange={changehandler}
                                value={formData.OwnerMob}
                                className='textdivsize w-full flex justify-center items-center rounded-[8px]  text-richblack-100
                                                border border-richblack-2 px-[12px] py-[8px] gap-x-2 mt-0'
                            />
                        </label>


                        <label className='mt-4'>
                            <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]' >DRIVER PHONE NO:- <sup className='text-pink-200'>*</sup></p>
                            <input
                                required
                                type="tel"
                                name="DriverMob"
                                placeholder=''
                                onChange={changehandler}
                                value={formData.DriverMob}
                                className='textdivsize w-full flex justify-center items-center rounded-[8px] text-richblack-100
                                                 border border-richblack-2 px-[12px] py-[8px] gap-x-2 mt-0'
                            />
                        </label>



                        <label className='mt-4'>
                            <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]' >REMARK <sup className='text-pink-200'>*</sup></p>
                            <input
                                required
                                type="text-area"
                                name="Remark"
                                placeholder=''
                                onChange={changehandler}
                                value={formData.Remark}
                                className='textdivsize w-full flex justify-center items-center rounded-[8px] aAACJIDR3429 text-richblack-100
                                                border border-richblack-2 px-[12px] py-[8px] gap-x-2 mt-0'
                            />
                        </label>

                    </div>

                </div>

                <div className='btndiv'>

                    <button className=' submitButt  rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                        SUBMIT
                    </button>

                    <div className=' cancelbtt  text-black  text-[1rem]   rounded-[8px]   px-[12px] py-[8px] mt-6'>
                        CANCEL
                    </div>

                </div>
            </form>
        </div>
                   

  )
}

export default Dashboardform