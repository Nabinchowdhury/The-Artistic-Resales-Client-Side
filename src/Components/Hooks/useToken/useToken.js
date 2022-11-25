import { useEffect, useState } from 'react';

const useToken = (email) => {
    const [token, setToken] = useState("")


    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.accessToken) {
                        setToken(data.accessToken)
                        localStorage.setItem("AccessToken", data.accessToken)
                    }
                })
                .catch(err => console.log(err))
        }
    }, [email])

    return [token]
};

export default useToken;