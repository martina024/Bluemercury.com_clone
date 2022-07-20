let loginArr=JSON.parse(localStorage.getItem("signUp")) || [];

   document.querySelector("form").addEventListener("submit",mylogin)

   function mylogin(){
    event.preventDefault()
        let obj={
            email:document.querySelector("#email").value,
            password:document.querySelector("#password").value,
        }
        let flag=true
        loginArr.forEach(function(ele){
            if(ele.email===obj.email && ele.password===obj.password){
                flag=false
                localStorage.setItem("login",JSON.stringify(ele))
                window.location.href="home_page.html"
            }
        })
        if(flag==true){
            document.querySelector("#alert").innerHTML=""
            let alertbox=document.createElement("p")
            alertbox.setAttribute("id","alert")
            alertbox.innerText="Invalid email or password"
           document.querySelector("#alert").append(alertbox)
        }
   }
