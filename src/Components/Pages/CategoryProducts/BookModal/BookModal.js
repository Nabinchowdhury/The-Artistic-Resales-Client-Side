import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from '../../../Contexts/AuthProvider';


const BookModal = ({ bookingProduct, setBookingProduct
}) => {

    const { user } = useContext(AuthContext)

    const { _id, productName, price, status, image } = bookingProduct


    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target
        const bookingDetails = {
            customerName: user?.displayName,
            customerEmail: user?.email,
            itemName: productName,
            itemId: _id,
            itemImage: image,
            price: price,
            customerPhone: form.phone.value,
            meetingLocation: form.meetingLocation.value,
            status: status
        }
        // console.log(bookingDetails);

        axios.post("http://localhost:5000/bookings", bookingDetails, {
            headers: {
                authorization: `bearer ${localStorage.getItem("AccessToken")}`
            }
        }).then(res => {

            if (res.data.acknowledged) {

                setBookingProduct(null)
                toast.success("Booking successfull")


            }
        }).catch(err => console.log(err))
    }
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="bookModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Book</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name="name" type="text" defaultValue={user?.displayName} readOnly disabled className="input w-full input-bordered" />

                        <input name="email" type="email" defaultValue={user?.email} readOnly disabled className="input w-full input-bordered" />

                        <input name="itemName" type="text" defaultValue={productName} readOnly disabled className="input w-full input-bordered" />

                        <input name="price" type="text" defaultValue={`$ ${price}`} readOnly disabled className="input w-full input-bordered" />

                        <input name="phone" type="text" placeholder="Enter Phone Number" className="input w-full input-bordered" required />

                        <input name="meetingLocation" type="text" placeholder="Type Meeting Location" className="input w-full input-bordered" required />

                        <br />
                        <input className='btn' type="submit" value="Submit" />
                        <label htmlFor="bookModal" className="btn btn-error">Cancel</label>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookModal;