const button=document.getElementById("btn")
const dogContainer=document.querySelector(".content")

button.addEventListener("click",function(){
    fetchRandomDogs()
})

function fetchRandomDogs(){
    const url="https://dog.ceo/api/breeds/image/random"

    fetch(url)
.then(res=>res.json()) 
.then(data=>{

 dogContainer.innerHTML=`
 <img src=${data.message}>
 `;
})

}

fetchRandomDogs()

