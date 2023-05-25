const btEnviar = document.querySelector("#btEnviar");
const btFechar = document.querySelector("#btFechar");
const detalhes = document.querySelector("#detalhes");
const tcorpo = document.querySelector("#tcorpo");



const produtos = JSON.parse(window.localStorage.getItem("produtos")) || []
console.log(produtos)
function preencherTabela() {
    produtos.forEach((e, i) => {
        const linha = document.createElement("tr");
        const id = document.createElement("td");
        const nome = document.createElement("td");
        const preco = document.createElement("td");
        const excluir = document.createElement("td");
        id.innerHTML = e.id;
        nome.innerHTML = e.nome;
        preco.innerHTML = e.preco;
        excluir.innerHTML = `<button class="cabec" onclick="excluirItem('${i}')">[x]</button>`;
        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(preco);
        linha.appendChild(excluir);
        tcorpo.appendChild(linha)
    })
}


function excluirItem(i) {
    produtos.splice(i,1)
    window.localStorage.setItem('produtos', JSON.stringify(produtos));
    window.location.reload();
}

function cadastrarLocal() {
    const pedido = {
        data: new Date(),
        itens: produtos
    }
    //Abrir ou iniciar a lista de produtos
    const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || []
    console.log(pedidos)
    //Acrescentar o novo item na lista
    pedidos.push(pedido)
    //Salvar a lista no armazenamento local
    window.localStorage.setItem("pedidos", JSON.stringify(pedidos))
 
    //Recarregar a página
    window.location.reload()
}