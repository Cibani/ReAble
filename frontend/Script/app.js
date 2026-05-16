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
const passwordcheck=document.getElementById('confirmPassword');
if(passwordcheck){
    passwordcheck.addEventListener("input", function(){
        let password=document.getElementById('password').value;
        let confirmPassword=passwordcheck.value;
        if(password!==confirmPassword){
            this.setCustomValidity("Passwords do not match");
        }
        else this.setCustomValidity("");

    })
}
//signup form handler
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', async(event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').valule;
    const data={email, password};
    try{
        const res= await fetch('http://localhost:5000/signup',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data),
        });
        const result=await res.text();
        alert(result);
    
    }
    catch(err){
        console.error('Signup error:', err);
    }
});
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
        alert('login submitted!');
    });
}
function testSkillExtraction() {
    fetch('http://127.0.0.1:5000/extract', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: "I know Java and Python" })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Extracted skills:", data.skills);
        alert("Skills: " + data.skills.join(", "));
    });
}

// TEMP: call it once to test
testSkillExtraction();