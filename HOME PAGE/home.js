let imageslink=[
    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/m61-perfect-cleanse-hero-des-2_1000x.jpg?v=1658264119",
    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/beauty-alfresco-summer-skin-repair-hero-des_1000x.jpg?v=1657297982",
    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/coop-virtue-july-2022-hero-des_1000x.jpg?v=1657749068",
    ]
    document.getElementById("first").addEventListener("click",firstfunction)
    document.getElementById("second").addEventListener("click",secondfunction)
    document.getElementById("third").addEventListener("click",thirdfunction)

    let crauser=document.getElementById("crauser")

    let imagestate=0

    function firstfunction(){
        imagestate=0
        crauser.src=imageslink[imagestate]
        
    }
    let imagestate1=0
    function secondfunction(){
        imagestate1=1
        crauser.src=imageslink[imagestate1]
    }
    let imagestate2=0
    function thirdfunction(){
        imagestate2=2
        crauser.src=imageslink[imagestate2]
    }