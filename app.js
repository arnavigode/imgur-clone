const container = document.querySelector('.postcontainer');
function loadImages(numImages = 10){
let i=0;

while(i < numImages){
fetch('https://api.imgflip.com/get_memes')
.then(response=>response.json())
.then(data=>{
const img =  document.createElement('img');

img.src = `${data.data.memes[1].url}`
container.appendChild(img)
})
i++;
}   
}
loadImages();


window.addEventListener('scroll',()=>{
console.log(window.scrollY) //scrolled from top
console.log(window.innerHeight) //visible part of screen
if(window.scrollY + window.innerHeight >= 
document.documentElement.scrollHeight){
loadImages();
}
})