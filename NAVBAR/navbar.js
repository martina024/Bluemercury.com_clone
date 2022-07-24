        let navbar=document.getElementById("navbar")
        let menu=document.getElementById("menu")

        window.onscroll=function(){
            if(window.pageYOffset>=menu.offsetTop){
                navbar.classList.add("sticky")
                

            }else{
                navbar.classList.remove("sticky")
                
            }
        } 
            
     document.querySelector("#navshop").addEventListener("click",myshop)
        function myshop(){
            window.location.href="shop_page.html"
        }
        
     document.querySelector("#navskin").addEventListener("click",myskin)
     function myskin(){
         window.location.href="skincare.html"
     }


    document.querySelector(".logo").addEventListener("click",mylogo)
        function mylogo(){
            window.location.href="home_page.html"
        }
    
     document.querySelector(".account").addEventListener("click",myaccount)
        function myaccount(){
            window.location.href="login_page.html"
        }
    document.querySelector(".cart").addEventListener("click",mybag)
        function mybag(){
            window.location.href="cart.html"
        }
