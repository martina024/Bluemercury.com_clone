document.querySelector("form").addEventListener("submit",mysignup);
let signupArr=JSON.parse(localStorage.getItem("signUp")) || [];

function mysignup (event){
    event.preventDefault()
    let obj={
        email:document.querySelector("#email").value,
        firstName:document.querySelector("#firstname").value,
        lastName:document.querySelector("#lastname").value,
        password:document.querySelector("#password").value,
    }
    for(let i=0;i<signupArr.length;i++){
        if(signupArr[i].email==obj.email){
        document.querySelector("#alert").innerHTML=""   
        let alertbox=document.createElement("p")
        alertbox.setAttribute("id","alert")
        alertbox.innerText="This email address is already associated with an account. If this account is yours, you can Signin"
        document.querySelector("#alert").append(alertbox)
            return
        }

    
        
    }
   
    if(obj.email=="" || obj.firstName=="" || obj.lastName=="" || obj.password==""){
        return 
    } else{
    signupArr.push(obj);
    localStorage.setItem("signUp",JSON.stringify(signupArr))
    window.location.href="login_page.html" 
    } 
}
