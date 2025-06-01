let bannerHorizontal = document.getElementById('bannerHorizontal')
let bannerVertical = document.getElementById('bannerVertical')
let descricao = document.getElementById('descricao')
let informacoes = document.getElementById("informacoes")
let tempo = document.getElementById("tempo")
let diretor = document.getElementById("diretor")

let valor = localStorage.getItem("URL")
valor = JSON.parse(valor)
console.log(valor)

let horas = Math.floor(valor.running_time / 60)
let minutos = Math.floor(valor.running_time % 60)

informacoes.style.background = `center / cover no-repeat url(${valor.movie_banner}) `

bannerVertical.src = `${valor.image}`
descricao.textContent = `${valor.description}`
tempo.textContent = `${horas} horas e ${minutos} minutos`
diretor.textContent = `${valor.director}`
