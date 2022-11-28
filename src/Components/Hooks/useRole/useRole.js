import React, { useEffect, useState } from 'react';

const useRole = (email) => {
    const [userRole, setUserRole] = useState("")
    const [roleLoading, setRoleLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://b612-used-products-resale-server-side-nabinchowdhury.vercel.app/users/checkRole/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("AccessToken")}`
                }
            }).then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setUserRole(data?.role)
                    setRoleLoading(false)

                })
        }
    }, [email])


    return [userRole, roleLoading]
};

export default useRole;