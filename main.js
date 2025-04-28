const imagemBanner = document.getElementById('imagemBanner')
const projetos = document.getElementById('Projetos')
const verMais = document.getElementById('projetoVerMais')

const fetchApi = (value) => {
    const result = fetch(`https://ghibliapi.vercel.app/films/${value}`)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data)
        return data
    } )

    return result
}

async function Iniciar() {

    const banner = await fetchApi('ea660b10-85c4-4ae3-8a5f-41cea3648e3e')
    imagemBanner.src = `${banner.movie_banner}`

    const result = await fetchApi('')
    console.log(result)
    for (let cards = 0; cards <= result.length - 13; cards++) {
        let InformacaoCards = result[cards]
        let Titulo = document.createElement('p')
        let imagem = document.createElement('img')
        let descricao = document.createElement('p')
        let card = document.createElement('section')

        Titulo.textContent = `${InformacaoCards.title}`
        descricao.textContent = `${InformacaoCards.description}`
        
        imagem.src = `${InformacaoCards.image}`

        Titulo.className = 'cardsTitulo'
        imagem.className = 'cardsImagem'
        descricao.className = 'cardsDescricao'
        card.className = 'cards'

        card.append(Titulo,imagem,descricao)
        projetos.append(card)
    }
}

Iniciar()
verMais.addEventListener('click',async () => {
    const resultado = await fetchApi('')
    projetos.innerHTML = ''
    for ( let cards of resultado ){
        let Titulo = document.createElement('p')
        let imagem = document.createElement('img')
        let descricao = document.createElement('p')
        let card = document.createElement('section')

        Titulo.textContent = `${cards.title}`
        descricao.textContent = `${cards.description}`
        
        imagem.src = `${cards.image}`
                

        Titulo.className = 'cardsTitulo'
        imagem.className = 'cardsImagem'
        descricao.className = 'cardsDescricao'
        card.className = 'cards'
        
        card.append(Titulo,imagem,descricao)
        projetos.append(card)

        console.log(cards.title)
    }
    verMais.remove()
})


