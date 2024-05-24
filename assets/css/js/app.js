function hideOverlay() {
    console.log('closing Overlay')
    document.querySelector('.overlay-newsletter').classList.add('hide-overlay')
}
document.querySelector(".cross-btn").addEventListener('click', hideOverlay)
setTimeout(() =>{
    document.querySelector('.overlay-newsletter').classList.remove('hide-overlay')
}, 1000*10)