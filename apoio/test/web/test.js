/*
testes de lógica 
*/


/* mapeamento de relação elemento pai e filho. */
function object() {
    let image = document.querySelector('.img')
    let hr = document.querySelector('#hr')
    let parent = hr.parentNode
    let node = image.childElementCount
    console.log('image class:')
    console.log(image)
    console.log('image class node count:')
    console.log(node)
    console.log('image element:')
    console.log(hr)
    console.log('image element parent:')
    console.log(parent)
}
document.onload = addEventListener('load',() => {
    object()
})