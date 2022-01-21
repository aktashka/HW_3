// const array = ['ararr', 1, 2,2]
// btns.forEach((item) => {
//     console.log(item)
// })

const btns = document.querySelectorAll('button')
btns.forEach(item => {
    item.addEventListener('click', (e) => {
        e.target.classList.toggle('red')
    })
})

