import React, { useEffect, useState } from 'react';

const useBooking = (id) => {
    const [isBooked, setIsBooked] = useState(false)
    useEffect(() => {
        if (id) {
            fetch(`https://b612-used-products-resale-server-side-nabinchowdhury.vercel.app/isBooked/${id}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("AccessToken")}`
                }
            }).then(res => res.json())
                .then(data => setIsBooked(data))
        }
    }, [id])

    return [isBooked]
};

export default useBooking;