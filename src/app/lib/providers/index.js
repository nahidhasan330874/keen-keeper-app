import React from 'react';
import { FriendsContextProvider } from '@/context/FriendContext';
import { ToastContainer } from 'react-toastify';
 
 const  Provider = ({children}) => {
    return (
        <FriendsContextProvider>
            {children}
         <ToastContainer />
        </FriendsContextProvider>
    );
 };
 
 export default  Provider;