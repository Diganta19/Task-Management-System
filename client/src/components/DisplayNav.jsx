/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation } from "react-router"


const DisplayNav = ({children}) => {
    const location = useLocation();
    const [disp,setDisp] = useState(false);

    useEffect(()=>{
        if(location.pathname === '/'){
            setDisp(false);
        }else{
            setDisp(true);
        }
    },[location])
  return (
    <div>
      {disp && children}
    </div>
  )
}

export default DisplayNav
