import React, { useState } from 'react';
import { Avatar, IconButton, Typography, Button, TextField } from '@mui/material';
import { CameraAlt, Facebook, Twitter, Google } from "@mui/icons-material";
import axios from "axios";
import toast from 'react-hot-toast';
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

const Secondpage = () => { 
    const [isLogin, setIsLogin] = useState(true);
    const name = useInputValidation("");
    const username = useInputValidation("");
    const password = useStrongPassword();
    const bio = useInputValidation("");
    const avatar = useFileHandler("single");

    const handleLogin = async (e) => {
        e.preventDefault();
        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            }
        };

        try {
            const { data } = await axios.post(`${Server}/api/v1/user/login`, {
                email: username.value,
                password: password.value,
            }, config);

            dispatch(userExists(true));
            toast.success(data.message);
        } catch (error) {
            toast.error(error?.response?.data?.message || "something went wrong");
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("avatar", avatar.file);
        formData.append("name", name.value);
        formData.append("bio", bio.value);
        formData.append("password", password.value);
        formData.append("email", username.value);

        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        try {
            const { data } = await axios.post(`${Server}/api/v1/user/new`, formData, config);
            dispatch(userExists(true));
            toast.success(data.message);
        } catch (error) {
            console.error("Signup error:", error.response?.data?.message || error.message);
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };
    
    return (
        <>
            <div className="w-full bg-[#f7f736] h-81">
                <div data-scroll data-scroll-section data-scroll-speed='.2'className="mb-10 pb-20 py-20 overflow-hidden rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black overflow-hidden">
                    <div className="text border-t-2 border-b-2 border-zinc-900 flex overflow-hidden whitespace-nowrap">
                        <motion.h1
                            initial={{ x: "0" }}
                            animate={{ x: "-100%" }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
                            className='text-[17vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase font-semibold pr-20'
                        >
                            Let's Chat With Eachother!
                        </motion.h1>
                        <motion.h1
                            initial={{ x: "0" }}
                            animate={{ x: "-100%" }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
                            className='text-[17vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase font-semibold pr-20'
                        >
                            Let's Chat With Eachother!
                        </motion.h1>
                    </div>
                    </div>
                    <div className="h-full">
                <div className=" abolutew-full h-full top-10 p-20 bg-[#f7f736] text-black overflow-hidden">
                    <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
                        "A chat app transcends geographical boundaries, fostering instant and meaningful connections. Enabling friends, families, and colleagues to stay connected regardless of distance. In a fast-paced world, they bring a sense of immediacy and accessibility, making it easier than ever to stay in touch and build a community."
                    </h1>
                    <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
                        <div className="w-1/2">
                            <h1 className='text-6xl'> Our Approach</h1>
                            <button className="px-10 mr-0 py-6 text-1xl flex gap-3 bg-zinc-900 mt-10 rounded-full text-white hover:bg-white hover:text-black font-semibold">Read More 
                                <div className="ml-2 w-7 h-7 border border-black rounded-full bg-black text-white flex items-center hover:bg-white hover:text-black justify-center">
                                    <ArrowForwardIcon />
                                </div> 
                            </button>
                        </div>
                        <div className="flex flex-col py-10 px-5 items-center p-8 space-y-6 bg-white rounded-lg shadow-lg">
                            <h2 className="text-center text-3xl font-extrabold text-gray-900">
                                {isLogin ? "Login" : "Sign Up"}
                            </h2>
                            <form className="space-y-6" onSubmit={isLogin ? handleLogin : handleSignup}>
                                {!isLogin && (
                                    <div className="flex flex-col items-center">
                                        <Avatar src={avatar.preview} className="w-24 h-24 mb-4" />
                                        <IconButton component="label">
                                            <CameraAlt />
                                            <input type="file" hidden onChange={avatar.changeHandler} />
                                        </IconButton>
                                        {avatar.error && (
                                            <Typography color="error" className="text-sm text-red-600">
                                                {avatar.error}
                                            </Typography>
                                        )}
                                    </div>
                                )}
                                {!isLogin && (
                                    <TextField
                                        label="Name"
                                        type="text"
                                        required
                                        fullWidth
                                        value={name.value}
                                        onChange={name.changeHandler}
                                        variant="outlined"
                                    />
                                )}
                                <TextField
                                    label="Email"
                                    type="email"
                                    required
                                    fullWidth
                                    value={username.value}
                                    onChange={username.changeHandler}
                                    variant="outlined"
                                />
                                {username.error && (
                                    <Typography color="error" className="text-sm text-red-600">
                                        {username.error}
                                    </Typography>
                                )}
                                <TextField
                                    label="Password"
                                    type="password"
                                    required
                                    fullWidth
                                    value={password.value}
                                    onChange={password.changeHandler}
                                    variant="outlined"
                                />
                                {password.error && (
                                    <Typography color="error" className="text-sm text-red-600">
                                        {password.error}
                                    </Typography>
                                )}
                                {!isLogin && (
                                    <TextField
                                        label="Bio"
                                        type="text"
                                        required
                                        fullWidth
                                        value={bio.value}
                                        onChange={bio.changeHandler}
                                        variant="outlined"
                                    />
                                )}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className="bg-gradient-to-r from-blue-500 to-blue-900"
                                >
                                    {isLogin ? "Login" : "Sign Up"}
                                </Button>
                                <Typography align="center">
                                    {isLogin ? (
                                        <span>
                                            Or Sign Up Using <Button color="primary" onClick={() => setIsLogin(false)}>SIGN UP</Button>
                                        </span>
                                    ) : (
                                        <span>
                                            Or Login Using <Button color="primary" onClick={() => setIsLogin(true)}>LOGIN</Button>
                                        </span>
                                    )}  
                                </Typography>
                                <div className="flex items-center justify-center space-x-4">
                                    <div className="flex justify-center my-4">
                                        <IconButton>
                                            <Facebook style={{ color: '#3b5998', fontSize: 40 }} />
                                            <Twitter style={{ color: '#1DA1F2', fontSize: 40, margin: '0 15px' }} />
                                            <Google style={{ color: '#DB4437', fontSize: 40 }} />
                                        </IconButton>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Secondpage;
