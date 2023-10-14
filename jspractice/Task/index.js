const form = document.getElementById("form")
const uname = document.getElementById("uname")
const email= document.getElementById("email")
const pswd = document.getElementById("pswd")
const cpswd = document.getElementById("cpswd")
const tandc = document.getElementById("tc")

form.addEventListener('submit',(e)=>{

    e.preventDefault()
    validate()
})

function validate()
{
    let unamevalue= uname.value.trim;
    let emailvalue=email.value.trim;
    let pswdvalue=pswd.value.trim;
    let cpswdvalue=cpswd.value.trim;

        if(unamevalue===" "){
            seterror=(uname,'user name cannot be empty')
        }
        else if(namevalue.length<3){
            setError(uname,'user name should be minimum 3 characters')
        }
        else{        
            setSuccesss(uname)
        }
        if(emailvalue===''){
            setError(email,'Email cannot be empty')
        }  
        else if(!emailCheck(emailvalue)){
            setError(email,'Enter Valid Email Id')
        }
        else{        
            setSuccesss(email)
        }
        if(pswdvalue===''){
            setError(pswd,'password cannot be empty')
        }
        else if(pswdvalue.length<8){
            setError(pswd,'user name should be minimum 8 characters')
        }
        else{        
            setSuccesss(pswd)
        }
        if(cpswdvalue===''){
            setError(cpswd,'password cannot be empty')
        }
        else if(cpswdvalue !==pswdvalue){
            setError(cpswd,'passwords not matched')
        }
        else{        
            setSuccesss(cpswd)
        }
        if(!tandc.checked){
         
            setError(tc,'click on agree terms checkbox')        
        }
        else{
            setSuccesss(tc)
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
    
    
        function emailCheck(input){
            let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            let valid = emailReg.test(input)       
            return valid
        }
    }
    

