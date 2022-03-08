// product data
const products = [
    {
        id: 1,
        item: 'Brush',
        type: 'Tools',
        img: 'https://img.icons8.com/cotton/64/000000/cosmetic-brush.png',
        desc: 'common tool with bristles, wire or other filaments. It generally consists of a handle or block to which filaments are affixed in either a parallel.'
    },
    {
        id: 2,
        item: 'Nail Polish',
        type: 'MakeUp',
        img: 'https://img.icons8.com/cotton/64/000000/nail-polish.png',
        desc: 'polish (also known as nail varnish or nail enamel) is a lacquer that can be applied to the human fingernail or toenails to decorate and protect the nail plates.'
    },
    {
        id: 3,
        item: 'Mirror',
        type: 'Tools',
        img: 'https://img.icons8.com/cotton/64/000000/mirror.png',
        desc: 'mirror is an object that reflects an image. Light that bounces off a mirror will show an image of whatever is in front of it, when focused through lens.'
    },
    {
        id: 4,
        item: 'LipStick',
        type: 'MakeUp',
        img: 'https://img.icons8.com/cotton/64/000000/lipstick.png',
        desc: 'Lipstick is a cosmetic that applies color, texture, and protection to the lips. Many colors and types of lipstick exist. Some lipsticks are also lip balms.'
    },
]

// dom elements
const pic = document.getElementById('pic')
const item = document.getElementById('item')
const type = document.getElementById('type')
const desc = document.getElementById('desc')

const pre = document.querySelector('.pre')
const rnd = document.querySelector('.rnd')
const nxt = document.querySelector('.nxt')

// loader function
function loadData() {
    const product = products[curItem]
    pic.src = product.img
    item.textContent = product.item
    type.textContent = product.type
    desc.textContent = product.desc
}

// default item, set & load
let curItem = 0
window.addEventListener('DOMContentLoaded', () => {
    loadData()
})

// next item
nxt.addEventListener('click', () => {
    curItem++
    if(curItem > products.length-1) curItem = 0
    loadData()
})

// previous item
pre.addEventListener('click', () => {
    curItem--
    if(curItem < 0 ) curItem = products.length-1
    loadData()
})

// random item
rnd.addEventListener('click', () => {
    curItem = Math.floor(Math.random() * products.length)
    loadData()
})