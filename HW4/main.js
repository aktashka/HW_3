const inputUsd = document.querySelector('#USD'),
    inputRub = document.querySelector('#RUB')

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest()

    request.open('GET', 'data.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.addEventListener('readystatechange', () => {
        const data = JSON.parse(request.response)
        inputUsd.value = +inputRub.value / data.USD
    })
})