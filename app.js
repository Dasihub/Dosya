const btn = document.querySelector('#btn')
const img = document.querySelector('img')
const audio = document.querySelector('audio')

btn.addEventListener('click', () => {
    btn.style.display = 'none'
    img.style.display = 'block'
    audio.play()
})