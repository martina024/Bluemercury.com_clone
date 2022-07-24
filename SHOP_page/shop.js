let productData=[
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-matteblack-860004981176-1_235x.jpg?v=1658421893",brand:"SOLAWAVE",name:" Advanced Skincare Wand with Red Light Therapy ",price:"$149",price1:149,productId:"1"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-685428027770-1_235x.jpg?v=1658421412",brand:"BUMBLE AND BUMBLE",name:"Curl Moisturizing Shampoo ",price:"$34",price1:34,productId:"2"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060403580108-1_235x.jpg?v=1657786475",brand:"BOUCLÈME",name:"Curl Cream ",price:"$32",price1:32,productId:"3"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060403580023-1_235x.jpg?v=1657786478",brand:"BOUCLÈME ",name:"Curl Defining Gel",price:"$25",price1:25,productId:"4"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309023017-1_235x.jpg?v=1655320123",brand:"BLUEMERCURY",name:"The Vacation Edit",price:"99",price1:99,productId:"5"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-885609025421-1_235x.jpg?v=1658506198",brand:"PCA SKIN",name:"Supersonic Hair Dryer - Copper",price:"$29",price1:29,productId:"6"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-390205022892-1_235x.jpg?v=1657137999",brand:"ELTAMD",name:"UV Daily Broad-Spectrum SPF 40 ",price:"$32",price1:32,productId:"7"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-10-810083840574-1_235x.jpg?v=1656016070",brand:"AUGUSTINUS BADER",name:"The Light Cream",price:"$175",price1:175,productId:"8"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025019062-1_235x.jpg?v=1658449871",brand:"KJAER WEIS",name:"The Beautiful Tint",price:"$49",price1:49,productId:"9"

    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025018607-1_235x.jpg?v=16575851051",brand:"PCA SKIN",name:"Vitamin B3 Brightening Serum",price:"$120",price1:120,productId:"10"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-857177007093-1_235x.jpg?v=1657584891",brand:"ESKER",name:"Clarifying Body Wash",price:"$28",price1:28,productId:"31"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-citron-690156000698-1_235x.jpg?v=1655922932",brand:"VITRUVI",name:"Move Diffuser ",price:"$182",price1:182,productId:"32"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025010328-1_235x.jpg?v=1657584994",brand:"ELTAMD",name:"UV Clear Broad-Spectrum SPF 46 ",price:"$39",price1:39,productId:"33"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025010373-1_235x.jpg?v=1657585079",brand:"DIPTYQUE",name:"Candle Coffret",price:"$114",price1:114,productId:"34"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025010342-1_235x.jpg?v=1657585047",brand:"DIPTYQUE",name:"Citronnelle / Lemongrass Candle",price:"$70",price1:70,productId:"35"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-10-810083840574-1_235x.jpg?v=1656016070",brand:"KJAER WEIS",name:"The Beautiful Tint",price:"$149",price1:149,productId:"36"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025010052-1_235x.jpg?v=1657340365",brand:"PCA SKIN",name:"Collagen Hydrator",price:"$59",price1:59,productId:"37"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035217529-1_235x.jpg?v=1655323217",brand:"ORIBE",name:"Cote d'Azur Body Creme",price:"$65",price1:65,productId:"38"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-9353371000164-1_235x.jpg?v=1658495046",brand:"ORIBE",name:"Cote d'Azur Candle",price:"$79",price1:79,productId:"39"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-747930101543-1_235x.jpg?v=1658154386",brand:"ORIBE",name:"R+COLost Treasure Apple Cider Vinegar + Almond Milk Conditioner",price:"$35",price1:35,productId:"40"
        
    }
]
    displayfunction(productData)
    document.querySelector("#filter").addEventListener("change",handelfilter)
    let cartLS=JSON.parse(localStorage.getItem("cart-page")) || []
    
    
     
    function handelfilter(){
    let selected=document.querySelector("#filter").value

    if(selected==""){
        return displayfunction(productData)
    }else{
        if(selected=="Price Low To High") {
        
            productData.sort(function(a,b){
                return a.price1-b.price1
                
            })
            // console.log(productData)
            displayfunction(productData)
        }if(selected=="Price High To Low"){
            productData.sort(function(a,b){
                return b.price1-a.price1
            })
            displayfunction(productData)
            }
            
    }
    
    }
    
        function displayfunction(productData){
        document.querySelector("#container").innerHTML=""
        for(let i=0;i<productData.length;i++){
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.setAttribute("src",productData[i].image)
        image.setAttribute("id","image")
        let button=document.createElement("button")
        button.innerText="Quick View"
        button.setAttribute("id","button")
        button.addEventListener("click",function(){
            myview(productData[i])
          
        })
        let brand=document.createElement("h5")
        brand.innerText=productData[i].brand
        brand.setAttribute("id","brand")
        let name=document.createElement("p")
        name.innerText=productData[i].name
        name.setAttribute("id","name")
        name.addEventListener("click",function(){
            myprod()
        })
        let price=document.createElement("p")
        price.innerText=productData[i].price
        price.setAttribute("id","price")
        div.append(image,button,brand,name,price)
        document.querySelector("#container").append(div)
    }
    }
   
    function myview(productData){
            cartLS.push(productData)
            alert("Product added sucessufully")
            localStorage.setItem("cart-page",JSON.stringify(cartLS))
            return false

    }
    function myprod(){
        
        window.location.href="./cart.html"
    }
   