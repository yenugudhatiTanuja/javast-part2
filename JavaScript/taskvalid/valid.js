const signinform = document.getElementById("signin")


const signinuname = document.getElementById("unames")



const signinpassword = document.getElementById("passwords")

signinform.addEventListener('Login',(e)=>{

    e.preventDefault()
    validate()
});

function validate(){
    let signinname= unames.value.trim()
    let signinpassword = passwords.value.trim()

    if(signinname===''){
        setError(unames,'user name cannot be empty')
    }
    else if(signinname.length<3){
        setError(unames,'user name should be minimum 3 characters')
    }
    else{        
           setSuccesss(unames)
    }


    if(signinpassword===''){
        setError(passwords,'password cannot be empty')
    }
    else if(signinpassword.length<8){
        setError(passwords,'user name should be minimum 8 characters')
    }
    else if(!validatesigninPassword(signinpassword))
    {
        setError(passwords,'password must conatin one captial ond edigit one special minimum length 8')
    }
    
    else{        
        setSuccesss(passwords)
    }
    function setError(input,message){
        let parent = input.parentElement;
        let small = parent.querySelector('small')
        small.innerText = message
        parent.classList.add('error')
        parent.classList.remove('success')
    }
    function setSuccesss(input){
        let parent = input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }
    function validatesigninPassword(passwords) {
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return passwordPattern.test(passwords);
      } 
     if(signinname && signinpassword && validatesigninPassword(signinpassword))
       alert("login successfully!!");

}
