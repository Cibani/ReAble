//Mobile nav toggle
const navToggle=document.querySelector('.nav-toggle');
const navLinks=document.getElementById('nav-links');
if(navToggle && navLinks){
    navToggle.addEventListener('click',()=>{
        const isOpen=navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}
//dynamic footer year
const yearSpan=document.getElementById('year');
if(yearSpan){
    yearSpan.textContent=new Date().getFullYear();
}
//need to handle buttons to open sign-up page
//simple login form handler
//temporary
const loginForm=document.querySelector('.auth-form');
if(loginForm){
    loginForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        //stop the form from refreshing the page
        const email=loginForm.email.value;
        const password=loginForm.password.value;
        //for now lets show it in the console
        console.log('login attempt:',{email,password});
        //later send the data to backend
        alert('login submitted!(This is a placeholder)');
    });
}