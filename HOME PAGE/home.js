let imageslink=[
    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/m61-perfect-cleanse-hero-des-2_1000x.jpg?v=1658264119",
    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/beauty-alfresco-summer-skin-repair-hero-des_1000x.jpg?v=1657297982",
    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/coop-virtue-july-2022-hero-des_1000x.jpg?v=1657749068",
    ]
    document.getElementById("first").addEventListener("mouseleave",firstfunction)
    document.getElementById("second").addEventListener("mouseleave",secondfunction)
    document.getElementById("third").addEventListener("mouseleave",thirdfunction)

    let crauser=document.getElementById("crauser")

    let imagestate=0

    function firstfunction(){
        document.querySelector("#input1").innerHTML=""
        imagestate++
        if(imagestate===imageslink.length){
            imagestate=0
        }if(imagestate=0){
            imagestate=imageslink.length-1
        }
        crauser.src=imageslink[imagestate]
        let head=document.createElement("h1")
        head.innerText="GET PUMPED!"
        head.setAttribute("id","input")
        let para=document.createElement("p")
        para.innerText="M-61 Perfect Cleanse now comes in a new, improved bottle,so it's easier to pump the perfect amount!"
        let anchor=document.createElement("a")
        anchor.innerText="SHOP NOW"
        anchor.href="shop now"
        document.querySelector("#input").append(head ,para ,anchor)
        
        
    }
    let imagestate1=0
    function secondfunction(){
        document.querySelector("#input").innerHTML=""
        imagestate1++
        if(imagestate1===imageslink.length-1){
            imagestate1=0

        }
        if(imagestate1=1){
            imagestate1=imageslink.length-2
        }
        crauser.src=imageslink[imagestate1]
        let h5=document.createElement("h5")
        h5.innerText="BEAUTY ALFRESCO"
        h5.setAttribute("id","input1")
        let head=document.createElement("h1")
        head.innerText="The Fix Is In"
        
        let para=document.createElement("p")
        para.innerText="Effective solutions for skin problems commonly caused by summer sun and heat!"
        let anchor=document.createElement("a")
        anchor.innerText="SHOP NOW"
        anchor.href="shop now"
        document.querySelector("#input1").append(h5,head,para,anchor)
    }
    let imagestate2=0
    function thirdfunction(){
        document.querySelector("#input1").innerHTML=""
        imagestate2=2
        crauser.src=imageslink[imagestate2]
        
    }
