import React, { useState  } from 'react'
import { NavLink ,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import "./mix.css"
import "./Login.css"


const LoginForm = ({ setIsLoggedIn }) => {
    
    
    const [passShow, setPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const history = useNavigate();

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


 

    const loginuser = async(e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
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
        } else {
            // console.log("user login succesfully done");


            const data = await fetch("/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                     email, password
                })
            });

            const res = await data.json();
             console.log(res);
             

            if(res.status === 201){
                
                localStorage.setItem("usersdatatoken",res.result.token);
                setIsLoggedIn(true);
                history("/")

                setInpval({...inpval,email:"",password:""});
               
            }
          
        }
    }

    return (
        <>
            <section>
                <div className="form_data">
                   

                    <form className='flex flex-col w-full mt-1'>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={loginuser}>Login</button>
                        <p>Don't have an Account? <NavLink to="/signup">Sign Up</NavLink> </p>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default LoginForm

















// import React, { useState } from 'react'
// import { toast } from 'react-hot-toast';
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { Link, useNavigate } from 'react-router-dom';
// import "./Login.css"


// const LoginForm = ({ setIsLoggedIn }) => {

//     const Nevigate = useNavigate();
//     const [formData, setDataform] = useState({
//         email: "",
//         password: ""
//     })

//     const [showPassword, setShpwPassword] = useState(false);
//     // hum isko false se initialise karege qkii start me password nahi dikhana hai isliyee

//     function changeHandler(event) {
//         setDataform((prevData) => (
//             {
//                 ...prevData,
//                 [event.target.name]: event.target.value
//             }))
//     }

//     function submitHandler(event) {
//         event.preventDefault();
//         setIsLoggedIn(true);
//         toast.success("Logged In");
//         Nevigate("/");
//     }


//     return (
        

//             <form onSubmit={submitHandler}
//                 className='flex flex-col w-full mt-1'>
//                 <label className=' w-full '>
//                     <p className='text-[0.775rem]   text-richblack-5 mb-1 leading -[1.375] '>Email Address <sup className='text-pink-200'>*</sup> </p>
//                     <input
//                         required
//                         type='email'
//                         value={formData.email}
//                         onChange={changeHandler}
//                         placeholder='Enter your Email Address'
//                         name="email"
//                         className=' inputBox  rounded-[0.5rem]  w-full p-[8px] '
//                     />
//                 </label>


//                 <label className='w-full relative mt-2'>
//                     <p className='text-[0.875rem] text-richblack-5 mb-1 leading -[1.375] ' >Password <sup className='text-pink-200'>*</sup> </p>
//                     <input
//                         required
//                         //    iss tarah humne ek hi input field ko text ki tarah bhi dikha liya or password ki tarahh bhi
//                         type={showPassword ? ("text") : ("password")}

//                         value={formData.password}
//                         onChange={changeHandler}
//                         placeholder='Enter Password'
//                         name="password"
//                         className='inputBox rounded-[0.5rem]  w-full p-[12px] '
//                     />
//                     <span
//                         className='absolute right-3 top-[38px] cursor-pointer '
//                         onClick={() => setShpwPassword((prev) => !prev)}>
//                         {showPassword ? (<AiOutlineEyeInvisible className='text-richblack-5 text-[24px] ' />) : (<AiOutlineEye className='text-white text-[24px]' />)}
//                     </span>

//                     <Link to="#">
//                         <p className='text-xs  mt-1 text-blue-100 max-w-max ml-auto'>Forget password</p>
//                     </Link>

//                 </label>

//                 <button className='sign rounded-[8px] font-medium  px-[12px] py-[8px] mt-6'>
//                     Sign in
//                 </button>

//             </form>
       
//     )
// }

// export default LoginForm