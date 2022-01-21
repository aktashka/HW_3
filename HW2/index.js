const inn = document.querySelector('#inn'),
    result = document.querySelector('#result'),
    btn = document.querySelector('#btn')

const reg = /^(0|1|2)\d{13}$/

btn.addEventListener('click', () => {
    if (reg.test(inn.value)) {
        result.textContent = 'success'
        result.style.color = 'green'
    } else {
        result.textContent = 'fail'
        result.style.color = 'red'
    }

})
