import { useState, useEffect } from "react";
import useAuth from "./useAuth";

const useRole = () => {
  const { user, loading } = useAuth();
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && user?.email) {
      fetch(`https://scica10.vercel.app/user/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          const { role } = data;
          setRole(role);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching role:", error);
        });
    }
  }, [loading, user]);

  return [role, isLoading];
};

export default useRole;
