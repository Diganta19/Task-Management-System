/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation } from "react-router"


const DisplayNav = ({children}) => {
    const location = useLocation();
    const [disp,setDisp] = useState(false);

    useEffect(()=>{
        if(location.pathname === '/'){
            setDisp(false);
        }else if(location.pathname === '/admindash'){
            setDisp(false);
        }else  if(location.pathname === '/admin'){
          setDisp(false);
        }else if(location.pathname === '/manage'){
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
