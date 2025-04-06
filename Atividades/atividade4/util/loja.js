const produtos = {
    id: [],
    nome: [],
    qnt: []
};

function adicionar(id, nome, qnt) {
    produtos.id.push(id);
    produtos.nome.push(nome);
    produtos.qnt.push(qnt);

    return `Você adicionou ${qnt} ${nome}(s) ao seu estoque.`;
}

function listar() {
    const lista = [];

    for (let i = 0; i < produtos.id.length; i++) {
        lista.push({
            id: produtos.id[i],
            nome: produtos.nome[i],
            qnt: produtos.qnt[i]
        });
    }

    return lista;
}

function remover(id) {
    const index = produtos.id.indexOf(id);

    if (index !== -1) {
        const nome = produtos.nome[index];
        produtos.id.splice(index, 1);
        produtos.nome.splice(index, 1);
        produtos.qnt.splice(index, 1);

        return `Você removeu ${nome} do seu estoque.`;
    } else {
        return `ID não encontrado.`;
    }
}

function editar(id, novaQnt) {
    const index = produtos.id.indexOf(id);

    if (index !== -1) {
        produtos.qnt[index] = novaQnt;
        const nome = produtos.nome[index];

        return `Você atualizou a quantidade de ${nome} para ${novaQnt}.`;
    } else {
        return `ID não encontrado.`;
    }
}

module.exports = {
    produtos,
    adicionar,
    listar,
    remover,
    editar
};
