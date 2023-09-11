import React, { useState } from 'react'

const Signup = () => {
        const [user,setUser] = useState({
        uname:'',
        unumber:'',
        uemail:'',
        upassword:'',
    });

    // const updateName = (e) =>{
    //     const name = e.target.value;
    //     setUser({
    //       ...user,
    //         name: name,  
    //     })
    // }
    // const updateNumber = (e) =>{
    //     const number = e.target.value;
    //     setUser({
    //       ...user,
    //         number: number,  
    //     })
    // }
    // const updateEmail = (e) =>{
    //     const email = e.target.value;
    //     setUser({
    //       ...user,
    //         email: email,  
    //     })
    // }
    // const updatePassword = (e) =>{
    //     const password = e.target.value;
    //     setUser({
    //       ...user,
    //         password: password,  
    //     })
    // }

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setUser((prev)=>{
            if(name === 'uname'){
                return{
                    uname: value,
                    unumber:prev.unumber,
                    uemail:prev.uemail,
                    upassword: prev.upassword, 
                }}
                else if(name === 'unumber'){
                    return{
                        uname: prev.uname,
                        unumber:value,
                        uemail:prev.uemail,
                        upassword: prev.upassword, 
                    }
                }
                else if(name === 'uemail'){
                    return{
                        uname: prev.uname,
                        unumber:prev.unumber,
                        uemail:value,
                        upassword: prev.upassword, 
                    }
                }
                else{
                    return{
                        uname: prev.uname,
                        unumber:prev.unumber,
                        uemail:prev.uemail,
                        upassword: value, 
                    }
                }

            }
        )
    }
    
    const signupSubmit=(e)=>{
        e.preventDefault();
        alert('done');
        console.log(user);
    }
    return (
    <div>
      <form onSubmit={signupSubmit}>
        <input placeholder='Name' type ="text" id='name' name='uname'  onChange={handleChange}/>
        <input placeholder='Number' id='number'type="number" name='unumber'  onChange={handleChange}/>
        <input placeholder='Email' id='email' name='uemail' type= "email"  onChange={handleChange}/>
        <input placeholder='Password' id='Password' name='upassword' type="password"  onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Signup
