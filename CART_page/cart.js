let cartLS=JSON.parse(localStorage.getItem("cart-page")) || []
displaytable(cartLS)

function displaytable(cartLS){
    let count=0
    let sum=0
    // let subtotal=0
    document.querySelector("tbody").innerHTML=""
   
    cartLS.forEach(function(elem,index){
        count++
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.setAttribute("class","th")
        td1.innerText=elem.name
        let td2=document.createElement("td")
        
        td2.innerText=elem.price
        td2.setAttribute("class","th")
        let td3=document.createElement("td")
        document.querySelector("#item").innerText=count
        td3.innerText="Remove"
        td3.setAttribute("id","remove")
        td3.addEventListener("click",function(){
            delfunction()
            count--
         })

        let td4=document.createElement("td")
        td4.innerText=elem.price 
        sum+=eval(elem.price1)
        document.querySelector("#total").innerText=sum
        td4.setAttribute("class","th")
        
        tr.append(td1,td2,td3,td4)
        document.querySelector("tbody").append(tr)
    })

    function delfunction(index){
        cartLS.splice(index,1)
        localStorage.setItem("cart-page",JSON.stringify(cartLS))
        displaytable(cartLS)
    }
  
    
}document.querySelector("button").addEventListener("click",mycheck)
function mycheck(){
    window.location.href="checkout_page.html"
}