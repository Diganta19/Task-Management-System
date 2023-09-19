/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter, redirect } from "react-router-dom";

const PrivateRouter = ({children,isSigned}) => {
   

    if(isSigned === "true"){
        return <Navigate to="/"/>
    }else{
        return  children
    }
}

export default PrivateRouter
