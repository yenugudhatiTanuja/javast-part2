/*let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
}*/


/*--------------------menu--------------*/


/*-----------------signup validation---------*/


const form = document.getElementById("form")


const uname = document.getElementById("uname")
const email = document.getElementById("email")
const password = document.getElementById("password")

const cpassword = document.getElementById("cpassword")
const tandc= document.getElementById("tc")


form.addEventListener('submit',(e)=>{

    e.preventDefault()
    validate()
});




function validate(){
    let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let cpasswordValue = cpassword.value.trim()
   

    //User name check

    if(nameValue===''){
        setError(uname,'user name cannot be empty')
    }
    else if(nameValue.length<3){
        setError(uname,'user name should be minimum 3 characters')
    }
    else{        
           setSuccesss(uname)
    }
    //email check
    if(emailValue===''){
        setError(email,'Eamil cannot be empty')
    }  
    else if(!emailCheck(emailValue)){
        setError(email,'Enter Valid Email Id')
    }
    else{        
        setSuccesss(email)
    }

    
    //Password check

    

    if(passwordValue===''){
        setError(password,'password cannot be empty')
    }
    else if(passwordValue.length<8){
        setError(password,'user name should be minimum 8 characters')
    }
    else if(!validatePassword(passwordValue))
    {
        setError(password,'password must conatin one captial ond edigit one special minimum length 8')
    }
    
    else{        
        setSuccesss(password)
    }

      
    //Confirm Password check

    if(cpasswordValue===''){
        setError(cpassword,'password cannot be empty')
    }
    else if(cpasswordValue !==passwordValue){
        setError(cpassword,'passwords not matched')
    }
    else{        
        setSuccesss(cpassword)
    }

     //Terms and conditions check

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
    function validatePassword(password) {
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return passwordPattern.test(password);
      }
      if (nameValue && emailCheck(emailValue) && passwordValue && validatePassword(passwordValue) && cpasswordValue === passwordValue && tandc.checked) {
        alert("Form submitted successfully!");
    }
}
/*----------------------------signup end------------------*/


/*------------------------------login---------------------*/
const menuBar = document.getElementById("menu-bar");
const navbar = document.querySelector(".navbar");
const closeNavbar = document.getElementById("close-navbar");

menuBar.addEventListener("click", () => {
    navbar.style.left = "0";
});

closeNavbar.addEventListener("click", () => {
    navbar.style.left = "-100%";
});
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        navbar.style.left = "0";
    } else {
        navbar.style.left = "-100%";
    }
});

/*----------------------------menubar end------------------*/

/*----------------------------scroll top button start------------------*/
const scrollTopButton = document.getElementById('scrollTopButton');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
};

scrollTopButton.addEventListener('click', function() {
    scrollToTop(3000); 
});

function scrollToTop(scrollDuration) {
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}
/*----------------------------scroll top button End------------------*/

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slider img");
    let currentImageIndex = 0;

    function showImage(index) {
        images[currentImageIndex].style.display = "none";
        images[index].style.display = "block";
        currentImageIndex = index;
    }

    function nextImage() {
        const nextIndex = (currentImageIndex + 1) % images.length;
        showImage(nextIndex);
    }

    setInterval(nextImage, 1000);
});

