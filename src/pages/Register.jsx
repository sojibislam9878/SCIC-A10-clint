import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

  const Register = () => {
    
    
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const { createUserWithEmail, updateUser, logout } = useAuth();
    
    const onSubmit = (data) => {
      const { email, password, name, photo } = data;
      console.log(data);
      
      createUserWithEmail(email, password, toast).then(() => {
        updateUser(name, photo);
        logout()
        navigate("/login");
      });
    };
    
    const [isHide, setIsHide] = useState(false);
  const handleHide = () => {
    setIsHide(!isHide);
  };


    return (
        <div
      style={{
        // backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url(${registerPhoto})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex justify-center items-center  min-h-screen"
    >

      <div className=" rounded-lg p-6 md:w-2/3 xl:w-1/3 mx-auto shadow-xl backdrop-blur-md">
        <form
         onSubmit={handleSubmit(onSubmit)}
         >
          <h1 className="text-4xl font-bold mt-12">Register New Account.</h1>
          <p className="font-medium mt-6 opacity-70">
            Create your Flavor Junction account
          </p>
          <div className="flex justify-center items-center gap-2 border-b-2">
            <span className="material-symbols-outlined mt-10 text-2xl">
              account_circle
            </span>
            <input
              placeholder="Full Name"
              {...register("name", { required: true })}
              className="w-full py-4  outline-none mt-10 bg-transparent "
            />
          </div>
          {errors.name && (
            <span className="text-red-600">Enter Your Full Name</span>
          )}
          <div className="flex justify-center items-center gap-2 border-b-2">
            <span className="material-symbols-outlined mt-6 text-2xl">
              alternate_email
            </span>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
              className="w-full py-4  outline-none mt-6 bg-transparent  "
            />
          </div>
          {errors.email && <span className="text-red-600">Enter Email</span>}
          <div className="flex justify-center items-center gap-2 border-b-2">
            <span className="material-symbols-outlined mt-6">image</span>
            <input
              type="url"
              placeholder="Your Photo URL"
              {...register("photo", { required: true })}
              className="w-full py-4  outline-none mt-6 bg-transparent "
            />
          </div>
          {errors.photo && (
            <span className="text-red-600">Give Your Photo URL</span>
          )}
          <div className="relative">
            <div className="flex justify-center items-center gap-2 border-b-2">
              <span className="material-symbols-outlined mt-6 text-2xl">
                lock
              </span>
              <input
                type={isHide ? "text" : "password"}
                placeholder="Your Password"
                {...register("password", { required: true })}
                className="w-full py-4 outline-none mt-6 bg-transparent"
              />
            </div>
            <p
              className="absolute right-5 top-11 hover:cursor-pointer"
              onClick={handleHide}
            >
              {isHide ? (
                <span className="material-symbols-outlined">
                  visibility_off
                </span>
              ) : (
                <span className="material-symbols-outlined">visibility</span>
              )}
            </p>
          </div>
          {errors.password && (
            <span className="text-red-600">Enter Password</span>
          )}
          <input
            type="submit"
            value="Create Account"
            className="btn w-full bg-[#003366] text-white text-lg border-none mt-6"
          />
        </form>
        <p className="text-center mt-6 mb-28 font-medium opacity-80 text-lg">
          <span className="opacity-80">Already have an account?</span>{" "}
          <Link to="/login">
            <span className="text-[#3482d1] font-bold">Login</span>
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
    );
};

export default Register;