import React from 'react'
import {Navigate} from 'react-router-dom';

export default function CustomRouter({isLoggedIn , children}) {
    if(isLoggedIn){
        return children;
    }else{
        return <Navigate to = "/login" />
    }
}
