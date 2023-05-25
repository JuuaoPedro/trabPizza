const btEnviar = document.querySelector("#btEnviar");
const btFechar = document.querySelector("#btFechar");
const detalhes = document.querySelector("#detalhes");
const tcorpo = document.querySelector("#tcorpo");
const finalizar = document.querySelector("#finalizar")


btFechar.addEventListener('click', () => {
    detalhes.classList.toggle("oculto");
})

const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || []

function preencherTabela() {
    let total = 0
    pedidos.forEach((e, i) => {
        console.log("E",e)
        const dataVariavel = ` ${new Date(e.data).toLocaleDateString()} - ${new Date(e.data).getHours()}:${new Date(e.data).getMinutes()}`
        e.itens.forEach((item, index) => {
            console.log("ITEM",item)
            const data = document.createElement("td");
            const linha = document.createElement("tr");
            const id = document.createElement("td");
            const nome = document.createElement("td");
            const preco = document.createElement("td");
            const excluir = document.createElement("td");
            data.innerHTML = dataVariavel;
            id.innerHTML = item.id;
            nome.innerHTML = item.nome;
            preco.innerHTML = item.preco;
            total += Number(item.preco.slice(7, item.preco.length))
            excluir.innerHTML = `<button class="cabec" onclick="excluirItem('${i}','${index}')">[x]</button>`;
            linha.appendChild(data);
            linha.appendChild(id);
            linha.appendChild(nome);
            linha.appendChild(preco);
            linha.appendChild(excluir);
            tcorpo.appendChild(linha)
        })
    })

    valorTotal(total)
}

function excluirItem(i,index) {
    console.log(i, index)
    pedidos[i].itens.splice(index, 1)
    window.localStorage.setItem('pedidos', JSON.stringify(pedidos));
    window.location.reload();
}

function valorTotal(total, valor) {
    finalizar.innerHTML += "R$ " + total.toFixed(2) 
}
