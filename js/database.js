// Banco de dados dos produtos

const quantidadeTotal = document.getElementById("quantidadeProdutos");
const precoTotal = document.getElementById("precoTotal");

function preco() {
  let valores = document.querySelectorAll(".precoItemCarrinho");
  let total = 0;
  for (let i = 0; i < valores.length; i++) {
    const regex = /\D/g;

    total += parseInt(valores[i].innerText.replace(regex, ""));
  }

  return total;
}

function quantidadeDeItens() {
  return document.querySelectorAll(".precoItemCarrinho").length;
}




const data = [
  {
    id: 1,
    img: "./img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 2,
    img: "./img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: "Acessórios",
  },
  {
    id: 3,
    img: "./img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: "Acessórios",
  },
  {
    id: 4,
    img: "./img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 5,
    img: "./img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 6,
    img: "./img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
];

function createCard(data) {
  
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divBackground = document.createElement("div");
  divBackground.classList.add("divdaimg");

  const img = document.createElement("img");
  img.classList.add("imgProduto");
  img.src = data.img;

  const descricao = document.createElement("div");
  descricao.classList.add("descricao");

  const tag = document.createElement("h6");
  tag.classList.add("tag");
  tag.innerText = data.tag;

  const nome = document.createElement("h4");
  nome.classList.add("nome");
  nome.innerText = data.nameItem;

  const produtodesc = document.createElement("p");
  produtodesc.classList.add("produtodesc");
  produtodesc.innerText = data.description;

  const valor = document.createElement("h5");
  valor.classList.add("valor");
  valor.innerText = `R$ ${data.value}`;

  const addAoCarrinho = document.createElement("button");
  addAoCarrinho.classList.add("addAoCarrinho");
  addAoCarrinho.innerText = data.addCart;

  divBackground.appendChild(img);
  descricao.appendChild(tag);
  descricao.appendChild(nome);
  descricao.appendChild(produtodesc);
  descricao.appendChild(valor);
  descricao.appendChild(addAoCarrinho);

  divCard.appendChild(divBackground);
  divCard.appendChild(descricao);

  addAoCarrinho.addEventListener("click", function carrinho() {
    cardDoCarrinho(data);
    const carrinhoVazio = document.querySelector(".carrinhoVazio");
    const carrinhoVazioh3 = document.querySelector(".h3CarrinhoVazio");
    const carrinhoVaziop = document.querySelector(".pCarrinhoVazio");

    carrinhoVazio.removeChild(carrinhoVazioh3);
    carrinhoVazio.removeChild(carrinhoVaziop);
  });

  return divCard;
}

function addCard(data) {
  const main = document.querySelector("main");
  for (let i = 0; i < data.length; i++) {
    main.appendChild(createCard(data[i]));
  }
}
addCard(data);

let geradorId = 0;

function cardDoCarrinho(data) {
  geradorId += 1;

  const carrinhoVazio = document.querySelector(".carrinhoVazio");

  const divItemCarrinho = document.createElement("div");
  divItemCarrinho.id = geradorId;
  divItemCarrinho.classList.add("itemCarrinho");

  const imgCarrinho = document.createElement("img");
  imgCarrinho.classList.add("imgItemCarrinho");
  imgCarrinho.src = data.img;

  const divDescricaoCarrinho = document.createElement("div");
  divItemCarrinho.classList.add("divDescricaoCarrinho");

  const nomeItemCarrinho = document.createElement("h4");
  nomeItemCarrinho.classList.add("nomeItemCarrinho");
  nomeItemCarrinho.innerText = data.nameItem;

  const precoItemCarrinho = document.createElement("h5");
  precoItemCarrinho.classList.add("precoItemCarrinho");
  precoItemCarrinho.innerText = `R$ ${data.value}`;

  const divRemoverCarrinho = document.createElement("div");
  divItemCarrinho.classList.add("divRemoverCarrinho");

  const removerDoCarrinho = document.createElement("button");
  removerDoCarrinho.classList.add("removerDoCarrinho");
  removerDoCarrinho.innerText = "Remover do Carrinho";

  removerDoCarrinho.setAttribute("onclick", "remover (" + geradorId + ")");

  carrinhoVazio.appendChild(divItemCarrinho);
  divItemCarrinho.appendChild(imgCarrinho);
  divItemCarrinho.appendChild(divDescricaoCarrinho);
  divDescricaoCarrinho.appendChild(nomeItemCarrinho);
  divDescricaoCarrinho.appendChild(precoItemCarrinho);
  divItemCarrinho.appendChild(divRemoverCarrinho);
  divRemoverCarrinho.appendChild(removerDoCarrinho);

  precoTotal.innerText = preco().toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  quantidadeTotal.innerText = quantidadeDeItens();


  esconder() 

  return divItemCarrinho;
}

function remover(idProdutoAdicionado) {
  const produtoToRemove = document.getElementById(idProdutoAdicionado);

  let carrinhoVazio = document.querySelector(".carrinhoVazio");

  produtoToRemove.remove(carrinhoVazio);

  precoTotal.innerText = preco().toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  esconder() 


  quantidadeTotal.innerText = quantidadeDeItens();
}

function esconder() {
   const divTotal = document.querySelector(".divTotal")
   const precoTotal = document.querySelector("#precoTotal")


   const carrinhoVazio = document.querySelector(".carrinhoVazio");
   


  
   if (precoTotal.innerText == ""  || precoTotal.innerText == "R$ 0,00" ) { divTotal.style.display = "none" 
   carrinhoVazio.innerHTML = '<h3 class="h3CarrinhoVazio">Carrinho Vazio</h3> <p class="pCarrinhoVazio">Adicione Itens</p>'  }

  else {divTotal.style.display = "flex"  }
}
  
esconder() 

let inputPesquisa = document.querySelector("#inputPesquisa")
let pesquisar = document.querySelector("#pesquisar")
const main = document.querySelector("main");

pesquisar.addEventListener("click", function fazendoPesquisa() {

let pesquisaFeita = data.filter(function (item) {if(item.nameItem.toLowerCase() == inputPesquisa.value.toLowerCase() ) return item} )

main.innerHTML= ""
addCard(pesquisaFeita)

}) 

let acessorios = document.querySelector("#acessorios")
acessorios.addEventListener("click", function mostrandoAcessorios() {

  let listaAcessorios = data.filter(function (item) {if(item.tag == "Acessórios"  ) return item} )
  main.innerHTML= ""
console.log(listaAcessorios)
  addCard(listaAcessorios)
  
  }) 


  let camisetas = document.querySelector("#camisetas")
camisetas.addEventListener("click", function mostrandoCamisetas() {

  let listaCamisetas = data.filter(function (item) {if(item.tag == "Camisetas"  ) return item} )
  main.innerHTML= ""

  addCard(listaCamisetas)
  
  }) 