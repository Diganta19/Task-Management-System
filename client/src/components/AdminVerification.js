function Validation (values){
    let error={}
    const email_pattern ="admin@gmail.com"
    const password_pattern = "password"

    if(values.email === ''){
        error.email = "Email should not be empty";
    }
    else if(!email_pattern === values.email){
        error.email = "Email ddnt match"
    }


   
    if(values.password === ''){
        error.password = "Password should not be empty";
    }
    else if(!password_pattern === values.password){
        error.password = "Password ddnt match"
    }
}

export default Validation;