

// import useAuth from "./useAuth";

// const useRole = () => {
//     const {user, loading}=useAuth() 
//     if (loading) {
//         return
//     }
//     fetch(`http://localhost:3000/user/${user?.email}`)
//     .then(res=>res.json())
//     .then(data=>{
//         const {role}= data
//         console.log(role);
//         return role
//     })
    
// };

// export default useRole;

import { useState, useEffect } from 'react';
import useAuth from './useAuth';

const useRole = () => {
    const { user, loading } = useAuth();
    const [role, setRole] = useState(null);
    const [isLoading, setIsLoading]= useState(true)

    useEffect(() => {
        if (!loading && user?.email) {
            fetch(`http://localhost:3000/user/${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    const { role } = data;
                    setRole(role);
                    setIsLoading(false)
                })
                .catch((error) => {
                    console.error('Error fetching role:', error);
                });
        }
    }, [loading, user]);

    return [role, isLoading];
};

export default useRole;