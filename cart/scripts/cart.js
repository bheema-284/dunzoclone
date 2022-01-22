var c=JSON.parse(localStorage.getItem("NOI"))
console.log(c);
var arr=JSON.parse(localStorage.getItem("Item1"))
for(var i=1; i<=c; i++){
    var itm=i;
    arr=JSON.parse(localStorage.getItem(`Item${itm}`))
    map(arr,i);
    console.log(arr)
}


function map(e,i){
    var list1=document.createElement("li")
    var list2=document.createElement("li")
    var list3=document.createElement("li")
    list1.style.listStyle="none"
    list2.style.listStyle="none"
    list3.style.listStyle="none"
    var pri=document.createElement("h3")
    pri=e.price
    var nam=document.createElement("h3")
    nam=e.name;
    list1.append(nam)
    list2.append(pri)    
    list3.append(i)
    var mcont=document.querySelector("#pname");
    mcont.append(list1)
    var pcont=document.querySelector("#pprice");
    pcont.append(list2)
    var cont=document.querySelector("#count");
    cont.append(list3)
}

var ammt=JSON.parse(localStorage.getItem("SOI"))
var cost=document.querySelector("#amt");
cost.append(ammt)