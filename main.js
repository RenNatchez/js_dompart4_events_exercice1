
let h1 = document.querySelector('h1')
console.log(h1)
var color = (a,b) =>{
    a.style.color = b;
}

h1.addEventListener('click', () => {
    color(h1,'blue')

})
