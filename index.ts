import PromptSync from "prompt-sync"; [cite: 388]

const prompt = PromptSync(); [cite: 388]


type Produto = {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
};


const inventario: Produto[] = [
    { id: 1, nome: "Notebook", preco: 3500, quantidade: 4 },
    { id: 2, nome: "Mouse Gamer", preco: 150, quantidade: 12 },
    { id: 3, nome: "Teclado Mecânico", preco: 300, quantidade: 0 }
];

let proximoId = 4;


function listarProdutos(): void {
    console.log("\n--- PRODUTOS EM ESTOQUE ---");
    if (inventario.length === 0) {
        console.log("Nenhum produto cadastrado.");
        return;
    }
    
    for (const prod of inventario) {
        const status = prod.quantidade > 0 ? `${prod.quantidade} un` : "ESGOTADO";
        console.log(`ID: ${prod.id} | ${prod.nome} - R$ ${prod.preco.toFixed(2)} [${status}]`);
    }
}

function cadastrarProduto(): void {
    console.log("\n--- CADASTRAR NOVO PRODUTO ---");
    const nome = prompt("Nome do produto: ");
    const preco = parseFloat(prompt("Preço (R$): "));
    const quantidade = parseInt(prompt("Quantidade inicial: "));

    
    if (!nome || isNaN(preco) || isNaN(quantidade) || preco < 0 || quantity < 0) {
        console.log("❌ Dados inválidos. Cadastro cancelado.");
        return;
    }

    const novoProduto: Produto = { id: proximoId++, nome, preco, quantidade };
    inventario.push(novoProduto);
    console.log(`✅ Produto "${nome}" cadastrado com sucesso!`);
}

function aplicarDescontoGeral(): void {
    console.log("\n--- APLICAR DESCONTO EM TUDO ---");
    const percentual = parseFloat(prompt("Digite a porcentagem de desconto (ex: 10 para 10%): "));

    if (isNaN(percentual) || percentual <= 0 || percentual > 100) {
        console.log("❌ Porcentagem inválida.");
        return;
    }


    const precosComDesconto = inventario.map(prod => prod.preco * (1 - percentual / 100));
    
    console.log("\nSimulação de preços atualizados:");
    inventario.forEach((prod, index) => {
        console.log(`${prod.nome}: de R$ ${prod.preco.toFixed(2)} por R$ ${precosComDesconto[index].toFixed(2)}`);
    });
    
    const confirmar = prompt("Deseja aplicar esse desconto permanentemente? (s/n): ");
    if (confirmar.toLowerCase() === 's') {
        inventario.forEach((prod, index) => prod.preco = precosComDesconto[index]);
        console.log("✅ Desconto aplicado no estoque!");
    } else {
        console.log("❌ Operação cancelada.");
    }
}

function exibirMenu(): void {
    let rodando = true;

    while (rodando) {
        console.log("\n=============================");
        console.log("   SISTEMA DE ESTOQUE - ALFA ");
        console.log("=============================");
        console.log("1. Listar Produtos");
        console.log("2. Cadastrar Produto");
        console.log("3. Aplicar Desconto Geral (Map)");
        console.log("0. Sair");
        console.log("=============================");
        
        const opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                listarProdutos();
                break;
            case "2":
                cadastrarProduto();
                break;
            case "3":
                aplicarDescontoGeral();
                break;
            case "0":
                console.log("\nEncerrando o sistema... Até logo!");
                rodando = false;
                break;
            default:
                console.log("❌ Opção inválida. Tente novamente.");
        }
    }
}

exibirMenu();