let productData=[
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-191677200845-1_235x.jpg?v=1657113391",brand:"ALO",name:"Luminizing Facial Moisturizer ",price:"$49",price1:49,productId:"21"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-853096007619-1_235x.jpg?v=1658449142",brand:"8GREENS",name:"Mega Energy Fizzy Tablet Peach Tea ",price:"$16",price1:16,productId:"21"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-827854001072-1_235x.jpg?v=1657585087",brand:"PCA SKIN",name:"Pigment® Gel Pro",price:"$122",price1:122,productId:"23"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-827854001027-1_235x.jpg?v=1657585043",brand:"PCA SKIN",name:"HydraMatte",price:"$99",price1:99,productId:"24"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025019758-1_235x.jpg?v=1658449867",brand:"PCA SKIN",name:"Overnight Lip Mask",price:"49",price1:49,productId:"25"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025019741-1_235x.jpg?v=1657585029",brand:"PCA SKIN",name:"ExLinea® Pro Peptide Serum",price:"$140",price1:140,productId:"26"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025019499-1_235x.jpg?v=1657585040",brand:"ELTAMD",name:"UV Daily Broad-Spectrum SPF 40",price:"$32",price1:32,productId:"27"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025019390-1_235x.jpg?v=1657584990",brand:"AUGUSTINUS BADER",name:"The Light Cream",price:"$175",price1:175,productId:"28"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025019062-1_235x.jpg?v=1658449871",brand:"KJAER WEIS",name:"The Beautiful Tint",price:"$149",price1:149,productId:"29"

    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025018133-1_235x.jpg?v=1657585051",brand:"PCA SKIN",name:"Vitamin B3 Brightening Serum",price:"$120",price1:120,productId:"30"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025012995-1_235x.jpg?v=1656623029",brand:"ESKER",name:"Clarifying Body Wash",price:"$28",price1:28,productId:"31"
        
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025010397-1_235x.jpg?v=1657584997",brand:"VITRUVI",name:"Move Diffuser ",price:"$39",price1:39,productId:"32"
        
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
   
   
