const imagemBanner = document.getElementById('imagemBanner');
const filme = document.getElementById('filme');
const verMais = document.getElementById('filmeVerMais');

const fetchApi = async (id = '') => {
  const res = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
  return res.json();
};

const criarCard = (filmeData) => {
  const card = document.createElement('section');
  const titulo = document.createElement('p');
  const imagem = document.createElement('img');
  const descricao = document.createElement('p');
  const botao = document.createElement('button');

  titulo.textContent = filmeData.title;
  imagem.src = filmeData.image;
  descricao.textContent = filmeData.description;
  botao.textContent = 'Ler mais';

  botao.addEventListener('click', () => {
    localStorage.setItem("URL", JSON.stringify(filmeData));
    window.location.href = "sinopse.html";
  });

  titulo.className = 'cardsTitulo';
  imagem.className = 'cardsImagem';
  descricao.className = 'cardsDescricao';
  card.className = 'cards';

  card.append(titulo, imagem, descricao, botao);
  return card;
};

const exibirFilmes = (listaFilmes) => {
  listaFilmes.forEach((filmeData) => {
    const card = criarCard(filmeData);
    filme.append(card);
  });
};

const Iniciar = async () => {
  const banner = await fetchApi('ea660b10-85c4-4ae3-8a5f-41cea3648e3e');
  imagemBanner.src = banner.movie_banner;

  const filmes = await fetchApi();
  const primeirosFilmes = filmes.slice(0, filmes.length - 13);
  exibirFilmes(primeirosFilmes);
};

verMais.addEventListener('click', async () => {
  const filmes = await fetchApi();
  filme.innerHTML = '';
  exibirFilmes(filmes);
  verMais.remove();
});

Iniciar();