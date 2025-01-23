import { produtos } from '../data/data_produtos.js';

export const retornarProdutos = () => {
    return produtos;
}

export const buscarProduto = (textoDigitado) => {
    return produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
    produto.categoria.toLowerCase().includes(textoDigitado.toLowerCase()) ||
    produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
    )
}

export const filtrarProduto = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria)
}

export const produtosEntrada = filtrarProduto("Entradas");