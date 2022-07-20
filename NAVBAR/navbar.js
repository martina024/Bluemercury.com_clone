
     document.querySelector("#navshop").addEventListener("click",myshop)
        function myshop(){
            window.location.href="shop_page.html"
        }

    document.querySelector("#navimg").addEventListener("click",mylogo)
        function mylogo(){
            window.location.href="home_page.html"
        }
    
     document.querySelector(".navlast img:nth-child(3)").addEventListener("click",myaccount)
        function myaccount(){
            window.location.href="login_page.html"
        }
    document.querySelector(".navlast img:nth-child(4)").addEventListener("click",mybag)
        function mybag(){
            window.location.href="cart.html"
        }

    document.querySelector("#navnew").addEventListener("click",mybag)
        function mybag(){
            window.location.href="new!.html"
        }