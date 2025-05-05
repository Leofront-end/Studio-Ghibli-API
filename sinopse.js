let bannerHorizontal = document.getElementById('bannerHorizontal')
let bannerVertical = document.getElementById('bannerVertical')
let descricao = document.getElementById('descricao')

let valor = localStorage.getItem("URL")
valor = JSON.parse(valor)
console.log(valor)

bannerHorizontal.src = `${valor.movie_banner}`
bannerVertical.src = `${valor.image}`
descricao.textContent = `${valor.description}`