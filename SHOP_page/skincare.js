let productData=[
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-827854001072-1_235x.jpg?v=1657585087",brand:"PCA SKIN",name:"Pigment® Gel Pro",price:"$129",price1:129,productId:"21"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-685428027770-1_235x.jpg?v=1658421412",brand:"BUMBLE AND BUMBLE",name:"Curl Moisturizing Shampoo",price:"$34",price1:34,productId:"22"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060403580108-1_235x.jpg?v=1657786475",brand:"BOUCLÈME",name:"Curl Cream",price:"$32",price1:32,productId:"23"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060403580023-1_235x.jpg?v=1657786478",brand:"BOUCLÈME",name:"Curl Defining Gel",price:"$25",price1:25,productId:"24"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309023017-1_235x.jpg?v=1655320123",brand:"BLUEMERCURY",name:"The Vacation Edit",price:"499",price1:499,productId:"25"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-885609025421-1_235x.jpg?v=1657294870",brand:"DYSON",name:"DYSON Supersonic™ Hair Dryer - Copper",price:"$429",price1:429,productId:"26"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-390205022892-1_235x.jpg?v=1657137999",brand:"ELTAMD",name:"UV Daily Broad-Spectrum SPF 40",price:"$32",price1:32,productId:"27"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060552905647-1_235x.jpg?v=1657670868",brand:"AUGUSTINUS BADER",name:"The Light Cream",price:"$175",price1:175,productId:"28"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-10-810083840574-1_235x.jpg?v=1656016070",brand:"KJAER WEIS",name:"The Beautiful Tint",price:"$149",price1:149,productId:"29"

    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025018607-1_235x.jpg?v=1657585105",brand:"PCA SKIN",name:"Vitamin B3 Brightening Serum",price:"$120",price1:120,productId:"30"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-857177007093-1_235x.jpg?v=1657584891",brand:"ESKER",name:"Clarifying Body Wash",price:"$28",price1:28,productId:"31"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-citron-690156000698-1_235x.jpg?v=1655922932",brand:"VITRUVI",name:"Move Diffuser ",price:"$39",price1:39,productId:"32"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-390205025008-1_235x.jpg?v=1656609271",brand:"ELTAMD",name:"UV Clear Broad-Spectrum SPF 46 ",price:"$39",price1:39,productId:"33"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431440976-1_235x.jpg?v=1657238695",brand:"DIPTYQUE",name:"Candle Coffret",price:"$114",price1:114,productId:"44"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431440976-1_235x.jpg?v=1657238695",brand:"DIPTYQUE",name:"Citronnelle / Lemongrass Candle",price:"$70",price1:70,productId:"55"
        
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
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035212869-1_235x.jpg?v=1655422527",brand:"ORIBE",name:"Cote d'Azur Candle",price:"$79",price1:79,productId:"39"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-810374029664-1_235x.jpg?v=1658261534",brand:"ORIBE",name:"R+COLost Treasure Apple Cider Vinegar + Almond Milk Conditioner",price:"$35",price1:35,productId:"40"
        
    }
]
    displayfunction(productData)
    document.querySelector("#filter").addEventListener("change",handelfilter)
     
    function handelfilter(){
    let selected=document.querySelector("#filter").value
    if(selected=="Featured"){
        return displayfunction(productData)
    } if(selected=="Price Low To High") {
        
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
            myview()
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
   
    function myview(){
        window.location.href="./cart.html"
    }
    function myprod(){
        window.location.href="./cart.html"
    }