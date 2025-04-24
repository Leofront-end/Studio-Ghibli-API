const imagemBanner = document.getElementById('imagemBanner')
const projetos = document.getElementById('Projetos')

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
    for (let card = 0; card <= result.length - 13; card++) {
        let InformacaoCard = result[card]
        let Titulo = document.createElement('p')
        let imagem = document.createElement('img')
        Titulo.innerHTML = `${InformacaoCard.title}`
        imagem.src = `${InformacaoCard.image}`
        console.log(Titulo,imagem);
        

        projetos.append(Titulo,imagem)
        console.log(result[card])
    }
}

Iniciar()


