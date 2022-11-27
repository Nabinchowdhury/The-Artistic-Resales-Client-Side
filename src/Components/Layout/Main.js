import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import BookModal from '../Pages/CategoryProducts/BookModal/BookModal';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

export const ModalContext = createContext()
const Main = () => {
    const [bookingProduct, setBookingProduct] = useState(null)
    const modalInfo = {
        bookingProduct, setBookingProduct

    }
    return (
        <div>
            <ModalContext.Provider value={modalInfo}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </ModalContext.Provider>
            {
                bookingProduct && <BookModal bookingProduct={bookingProduct} setBookingProduct={setBookingProduct}  ></BookModal>

            }
        </div>
    );
};

export default Main;