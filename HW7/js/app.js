const request = new XMLHttpRequest()
request.open('GET','https://jsonplaceholder.typicode.com/posts')
request.setRequestHeader('Content-type','application/js')
request.send()

request.addEventListener('load', () => {
    const data = JSON.parse(request.response)
    console.log(data)
    document.querySelectorAll('.title').innerHTML = data[50].title
    document.querySelectorAll('descr').innerHTML = data[30].body
})