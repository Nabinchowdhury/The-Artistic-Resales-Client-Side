import { useEffect, useState } from 'react';

const useToken = (email) => {
    const [token, setToken] = useState("")


    useEffect(() => {
        if (email) {
            // console.log(`https://b612-used-products-resale-server-side-nabinchowdhury.vercel.app/jwt?email=${email}`)
            fetch(`https://b612-used-products-resale-server-side-nabinchowdhury.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.accessToken) {
                        localStorage.setItem("AccessToken", data.accessToken)
                        setToken(data.accessToken)
                    }
                })
                .catch(err => console.log(err))
        }
    }, [email])

    return [token]
};

export default useToken;