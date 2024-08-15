import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { auth } from "../Firebase/firebaseConfig";
import {
  // GithubAuthProvider,
  // GoogleAuthProvider,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  // onAuthStateChanged,
  // signInWithEmailAndPassword,
  // signInWithPopup,
  // signOut,
  // updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";
// import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/web-extension";
import { auth } from "../src/firebase/firebaseConfig";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // email password authentications 
  const createUserWithEmail = (email, password, toast) => {
    setLoading(true);
    
    if (password.length < 6) {
      return toast.warn("Password must be at least 6 characters long", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    // if (!/^(?=.*[a-z]).*$/.test(password)) {
    //   return toast.warn("Password must contain a lowercase letter", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }
    // if (!/^(?=.*[A-Z]).*$/.test(password)) {
    //   return toast.warn("Password must contain a uppercase letter", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Account created successfuly",
      showConfirmButton: false,
      timer: 1500,
    });
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

   //   userlogin
   const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

   //   user
   const [user, setUser] = useState(null);


   //   check user
   useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      // const userEmail = currentUser?.email || user?.email;
      // const logingUser = { email: userEmail };
      setUser(currentUser);

      // if (currentUser) {
      //   axios
      //     .post("https://assignment11-chi.vercel.app/jwt", logingUser, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log(res.data);
      //     });
      // } else {
      //   axios
      //     .post("https://assignment11-chi.vercel.app/logout", logingUser, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log(res.data);
      //     });
      // }
      setLoading(false);
    });
    return () => unsubcribe();
  }, [user?.email]);
  
  // logout
  const logout = () => {
    setUser(null);
    signOut(auth);
  };

  // update user
  const updateUser = (name) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //save user to database
  if (user) {
    // console.log(user);
    const {displayName, email, }= user
    const dataUser = {name:displayName, email, role:"user"}
    console.log(dataUser);
    
    fetch("http://localhost:3000/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    
  }

  // social login providers
  
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignUP = () => {
    signInWithPopup(auth, googleProvider);
  };
  const githubSignUP = () => {
    signInWithPopup(auth, githubProvider);
  };




  const values = {
    user,
    createUserWithEmail,
    login,
    logout, 
    googleSignUP,
    githubSignUP,
    loading,
    updateUser
  };


  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AuthProvider;
