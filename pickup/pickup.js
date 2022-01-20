document.getElementById("pdiv").addEventListener("click",getlocation)
    function getlocation(){
        document.getElementById("div1").style.display="block"
        document.querySelector("body").style.backgroundColor="#d3d5db"
        document.getElementById("box1").style.backgroundColor="#d3d5db"
        document.getElementById("box2").style.backgroundColor="#d3d5db"
    }
    document.getElementById("closepickup").addEventListener("click",()=>{
        document.getElementById("div1").style.display="none"
        document.querySelector("body").style.backgroundColor=""
        document.getElementById("box1").style.backgroundColor=""
        document.getElementById("box2").style.backgroundColor=""
    })
    document.getElementById("ddiv").addEventListener("click",getdroplocation)
    function getdroplocation(){
        document.getElementById("div6").style.display="block"
        document.querySelector("body").style.backgroundColor="#d3d5db"
        document.getElementById("box1").style.backgroundColor="#d3d5db"
        document.getElementById("box2").style.backgroundColor="#d3d5db"
    }
    document.getElementById("closedrop").addEventListener("click",()=>{
        document.getElementById("div6").style.display="none"
        document.querySelector("body").style.backgroundColor=""
        document.getElementById("box1").style.backgroundColor=""
        document.getElementById("box2").style.backgroundColor=""
    })
    document.getElementById("place").addEventListener("input",()=>{
        debounce(getresults,3000)
    })

    document.getElementById("dropplace").addEventListener("input",()=>{
        debounce(getdropresult,3000)
    })
    var data;
    let response = fetch('places.json')
    .then((res)=>{
        return res.json()
    })
    .then((result)=>{
        data = result.places
    })

   function getresults(){
        let place = document.getElementById("place").value
        console.log(data)
        let flag = true
        for(let i=0;i<data.length;i++){
            if(place==data[i].name){
                flag = true
                break;
            }
            else{
                flag = false
            }
        }
        var image=document.createElement("img")
        image.className="image"
        var p = document.createElement("h2")
        var para = document.createElement("p")
        //document.getElementById("div1").innerHTML=""
        if(flag==true){
            document.getElementById("div2").innerHTML=null
            document.getElementById("div3").innerHTML=null
            document.getElementById("div5").innerHTML=null;
            let iframe = document.createElement("iframe")
            iframe.className="maps"
            iframe.setAttribute("allowfullscreen",true)
            iframe.src=`https://www.google.com/maps/embed/v1/place?key=AIzaSyDt-iuxli-lln4vvQiv79TTE6cmYWxOiz0&q=${place}`
            let div4 = document.createElement("div")
            div4.className="div4"
            let hno = document.createElement("input")
            hno.placeholder = "Enter flat no"
            let landmark = document.createElement("input")
            landmark.placeholder = "Enter nearest landmark"
            let name = document.createElement("input")
            name.placeholder = "Enter person name"
            let mobile = document.createElement("input")
            mobile.placeholder = "Enter mobile number"
            let button = document.createElement("button")
            button.className="continue"
            button.textContent="Continue"
            button.addEventListener("click",()=>{
                document.getElementById("pickup").textContent = hno.value+","+landmark.value+","+mobile.value+","+place+","+name.value
                document.getElementById("div1").style.display="none"
                document.querySelector("body").style.backgroundColor=""
                document.getElementById("box1").style.backgroundColor="white"
                document.getElementById("box2").style.backgroundColor="white"
            })
            div4.append(hno,landmark,name,mobile)
            document.getElementById("div5").append(button)
            document.getElementById("div3").append(div4)
            document.getElementById("div2").append(iframe)
        }
        else{
            document.getElementById("div2").innerHTML=null
            document.getElementById("div3").innerHTML=null
            //document.getElementById("maps").src=""
               image.src= "https://resources.dunzo.com/web-assets/prod/_next/static/images/not-serviceable-f04a7134ec39e556f27f61a7003cb718.png"
               p.textContent="Location is not serviceable"
               para.textContent = "Dunzo services are not available at this location yet. Please update your location."
               document.getElementById("div2").append(image,p,para)
            }
    }
    function getdropresult(){
        let dropplace = document.getElementById("dropplace").value
        console.log(data)
        let flag = true
        for(let i=0;i<data.length;i++){
            if(dropplace==data[i].name){
                flag = true
                break;
            }
            else{
                flag = false
            }
        }
        var image2=document.createElement("img")
        image2.className="image"
        var p2 = document.createElement("h2")
        var para2 = document.createElement("p")
        //document.getElementById("div1").innerHTML=""
        if(flag==true){
            document.getElementById("div7").innerHTML=null
            document.getElementById("div8").innerHTML=null
            document.getElementById("div9").innerHTML=null;
            let iframe2 = document.createElement("iframe")
            iframe2.className="maps"
            iframe2.setAttribute("allowfullscreen",true)
            iframe2.src=`https://www.google.com/maps/embed/v1/place?key=AIzaSyDt-iuxli-lln4vvQiv79TTE6cmYWxOiz0&q=${dropplace}`
            let div10 = document.createElement("div")
            div10.className="div4"
            let hno2 = document.createElement("input")
            hno2.placeholder = "Enter flat no"
            let landmark2 = document.createElement("input")
            landmark2.placeholder = "Enter nearest landmark"
            let name2 = document.createElement("input")
            name2.placeholder = "Enter person name"
            let mobile2 = document.createElement("input")
            mobile2.placeholder = "Enter mobile number"
            let button2 = document.createElement("button")
            button2.className="continue"
            button2.textContent="Continue"
            button2.addEventListener("click",()=>{
                document.getElementById("drop").textContent = hno2.value+","+landmark2.value+","+mobile2.value+","+dropplace+","+name2.value
                document.getElementById("div6").style.display="none"
                document.querySelector("body").style.backgroundColor=""
                document.getElementById("box1").style.backgroundColor="white"
                document.getElementById("box2").style.backgroundColor="white"
            let pay = document.createElement("button")
            pay.textContent="Pay Now"
            pay.id="paybutton"
            document.getElementById("pay").append(pay)
            document.getElementById("rules").textContent=null
            let amount = document.createElement("p")
            amount.textContent = `₹ ${Math.round(Math.random(30)*200)}`
            let total = document.createElement("h3")
            total.textContent = amount.textContent
            document.getElementById("amount").append(amount)
            document.getElementById("total").append(total)
            document.getElementById("rules").style.display="none"
            document.getElementById("cart").style.display="block"
            })
            div10.append(hno2,landmark2,name2,mobile2)
            document.getElementById("div9").append(button2)
            document.getElementById("div8").append(div10)
            document.getElementById("div7").append(iframe2)
        }
        else{
            document.getElementById("div7").innerHTML=null
            document.getElementById("div8").innerHTML=null
            //document.getElementById("maps").src=""
               image2.src= "https://resources.dunzo.com/web-assets/prod/_next/static/images/not-serviceable-f04a7134ec39e556f27f61a7003cb718.png"
               p2.textContent="Location is not serviceable"
               para2.textContent = "Dunzo services are not available at this location yet. Please update your location."
               document.getElementById("div7").append(image,p,para)
            }
    }
    let id;
    function debounce(func,delay){
        if(id){
            clearTimeout(id)
        }
        id = setTimeout(()=>{
            func()
        },delay)
    }