import React, { useState } from 'react'
import { NavLink , useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./mix.css"

const SignupForm = ({ setIsLoggedIn }) => {

    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });


    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const addUserdata = async (e) => {
        e.preventDefault();

        const { fname, email, password, cpassword } = inpval;

        if (fname === "") {
            toast.warning("fname is required!", {
                position: "top-center"
            });
        } else if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else if (cpassword === "") {
            toast.error("cpassword is required!", {
                position: "top-center"
            });
        }
        else if (cpassword.length < 6) {
            toast.error("confirm password must be 6 char!", {
                position: "top-center"
            });
        } else if (password !== cpassword) {
            toast.error("password and Confirm password are not matching!", {
                position: "top-center"
            });
        } else {
            // console.log("user registration succesfully done");


            const data = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, password, cpassword
                })
            });

            const res = await data.json();
            console.log(res.status);

            if (res.status === 201) {
                toast.success("Registration Successfully done 😃!", {
                    position: "top-center"
                });
                // history("/")
                setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "" });
            }
        }
    }
    const [accountType, setAccountType] = useState("student");

    return (
        <>
            <section className='signformdata'>
                <div className="form_data">
                <div
                className='flex role p-1 gap-x-1 rounded-full max-w-max'
                >
                <button
                    className={`${accountType === "Workers"
                        ?
                        " bg-richblack-2 text-richblack-5"
                        : "bg-transparent text-richblack-200"
                        } py-2 px-5 rounded-full transition-all duration-200 `}

                    onClick={() => setAccountType("Workers")}
                >
                    Workers
                </button>




                <button
                    className={`${accountType === "Driver"
                        ?
                        " bg-richblack-2 text-richblack-5"
                        : "bg-transparent text-richblack-200"
                        } py-2 px-5 rounded-full transition-all duration-200 `}

                    onClick={() => setAccountType("Driver")
                    }
                >
                    Driver
                </button>
                <button
                    className={`${accountType === "Admin"
                        ?
                        " bg-richblack-2 text-richblack-5"
                        : "bg-transparent text-richblack-200"
                        } py-2 px-5 rounded-full transition-all duration-200 `}

                    onClick={() => setAccountType("Admin")
                    }
                >
                    Admin
                </button>
            </div>
                   
                    <form>
                        <div className="form_input">
                            <label htmlFor="fname">Name</label>
                            <input type="text" onChange={setVal} value={inpval.fname} name="fname" id="fname" placeholder='Enter Your Name' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} value={inpval.password} onChange={setVal} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <div className="form_input">
                            <label htmlFor="password">Confirm Password</label>
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} value={inpval.cpassword} onChange={setVal} name="cpassword" id="cpassword" placeholder='Confirm password' />
                                <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={addUserdata}>Sign Up</button>
                        <p>Already have an account? <NavLink to="/login">Log In</NavLink></p>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default  SignupForm

























// import React, { useState } from 'react'
// import { toast } from 'react-hot-toast';
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { useNavigate } from 'react-router-dom';

// const SignupForm = ({ setIsLoggedIn }) => {
//     const nevigate = useNavigate();
//     const [formData, setDataform] = useState({
//         fname: "",
//         email: "",
//         password: "",
//         cpassword: ""
//     })

//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//     const [accountType, setAccountType] = useState("student");


//     function changehandler(event) {
//         setDataform((prevData) => (
//             {
//                 ...prevData,
//                 [event.target.name]: event.target.value
//             }))
//     }


//     function submitHandler(event) {
//         event.preventDefault();
//         if (formData.password !== formData.confirmPassword) {
            // toast.error("Password do not match ");
//             return;
//         }
//         setIsLoggedIn(true);
//         toast.success("Account Created");
//         const accountData = {
//             ...formData
//         }

//         const finalData = {
//             ...accountData,
//             accountType
//         }
//         console.log("Printing Final account Data ");
//         console.log(finalData);
//         nevigate("./dashboard")
//     }

//     return (
//         <div>
//             {/*  Student-Instructor tab*/}
//             <div
//                 className='flex role p-1 gap-x-1 rounded-full max-w-max'
//             >
//                 <button
//                     className={`${accountType === "Workers"
//                         ?
//                         " bg-richblack-2 text-richblack-5"
//                         : "bg-transparent text-richblack-200"
//                         } py-2 px-5 rounded-full transition-all duration-200 `}

//                     onClick={() => setAccountType("Workers")}
//                 >
//                     Workers
//                 </button>




//                 <button
//                     className={`${accountType === "Driver"
//                         ?
//                         " bg-richblack-2 text-richblack-5"
//                         : "bg-transparent text-richblack-200"
//                         } py-2 px-5 rounded-full transition-all duration-200 `}

//                     onClick={() => setAccountType("Driver")
//                     }
//                 >
//                     Driver
//                 </button>
//                 <button
//                     className={`${accountType === "Admin"
//                         ?
//                         " bg-richblack-2 text-richblack-5"
//                         : "bg-transparent text-richblack-200"
//                         } py-2 px-5 rounded-full transition-all duration-200 `}

//                     onClick={() => setAccountType("Admin")
//                     }
//                 >
//                     Admin
//                 </button>
//             </div>







//             <form onSubmit={submitHandler}>
//                 {/*first name and lastName  */}
//                 <div className='flex justify-between w-full mt' >
//                     <label className='mt-4 mr-4'>
//                         <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375] '>First Name <sup className='text-pink-200' >*</sup></p>
//                         <input
//                             required
//                             type="text"
//                             name="firstname"
//                             placeholder='Enter first Name:'
//                             onChange={changehandler}
//                             value={formData.firstname}
//                             className='role bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
//                         />

//                     </label>


//                     <label className='mt-4'>
//                         <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]' >last Name <sup className='text-pink-200'>*</sup></p>
//                         <input
//                             required
//                             type="text"
//                             name="lastname"
//                             placeholder='Enter last Name:'
//                             onChange={changehandler}
//                             value={formData.lastname}
//                             className='role bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
//                         />
//                     </label>

//                 </div>
//                 {/* Email Add */}
//                 <label className='w-full mt-4'>
//                     <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375] mt-4 ' >Email Address <sup className='text-pink-200'>*</sup></p>
//                     <input
//                         required
//                         type="email"
//                         name="email"
//                         placeholder='Enter Email Address:'
//                         onChange={changehandler}
//                         value={formData.email}
//                         className='role bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
//                     />
//                 </label>

//                 {/* createPassword and confirm password */}
//                 <div className='flex justify-between w-full'>
//                     <label className='relative mt-4 mr-4'>
//                         <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]'>Create Password <sup className='text-pink-200'>*</sup></p>
//                         <input
//                             required
//                             type={showPassword ? ("text") : ("password")}
//                             name="password"
//                             placeholder='Enter Password'
//                             onChange={changehandler}
//                             value={formData.password}
//                             className='role bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
//                         />

//                         <span
//                             className='absolute right-3 top-[38px] cursor-pointer '
//                             onClick={() => setShowPassword((prev) => !prev)}>
//                             {showPassword ? (<AiOutlineEyeInvisible className='text-white text-[24px] ' />) : (<AiOutlineEye className='text-white text-[24px]' />)}
//                         </span>
//                     </label>



//                     <label className=' relative mt-4'>
//                         <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375]' >Confirm Password <sup className='text-pink-200'>*</sup></p>
//                         <input
//                             required
//                             type={showPassword ? ("text") : ("password")}
//                             name="confirmPassword"
//                             placeholder='Confirm Password'
//                             onChange={changehandler}
//                             value={formData.confirmPassword}
//                             className='role bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
//                         />

//                         <span
//                             className='absolute right-3 top-[38px] cursor-pointer '
//                             onClick={() => setShowConfirmPassword((prev) => !prev)}>
//                             {showConfirmPassword ? (<AiOutlineEyeInvisible className='text-white text-[24px] ' />) : (<AiOutlineEye className='text-white text-[24px] ' />)}
//                         </span>
//                     </label>
//                 </div>
//                 <button className='sign w-full  rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
//                     Create Account
//                 </button>

//             </form>
//         </div>
//     )
// }

// export default SignupForm