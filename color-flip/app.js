const btn = document.getElementById('btn')
const color = document.querySelector('.color')

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

let colors = () => {
    let hexClr = '#'
    for (let i = 0; i < 6; i++) {
        hexClr += hex[Math.floor(Math.random() * hex.length)]
    }
    console.log(hexClr)
    document.body.style.backgroundColor = hexClr
    color.textContent = hexClr
}

btn.addEventListener('click', colors)
window.addEventListener('DOMContentLoaded', colors)