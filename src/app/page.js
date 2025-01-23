'use client'
import Image from "next/image";
import estilos from "./page.module.css";
import Categorias from "./componentes/Categorias";
import CampoDeBusca from "./componentes/CampoDeBusca";
import Cards from "./componentes/Cards";
import { retornarProdutos, buscarProduto, filtrarProduto, produtosEntrada } from "./servico";
import { useState } from "react";

export default function Home() {

  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntrada);
  const [textoBusca, setTextoBusca] = useState("");
  const [botaoClicado, setBotaoClicado] = useState("Entrada")

  const handleFiltrarProduto = (categoria) => {
    setDadosFiltrados(filtrarProduto(categoria));
    setTextoBusca("");
    setBotaoClicado(categoria );
  }

  const handleBuscarProduto = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    textoDigitado.length >= 3 &&  setDadosFiltrados(buscarProduto(textoDigitado))
    setBotaoClicado("");
  }

  return (
    <>
      <header className={estilos.secao_topo}>
        <div className={estilos.secao_div}>
          <div className={estilos.secao_texto}>
            <h1>RESTAURANT</h1>
            <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
          </div>
        </div>
      </header>

      <main className={estilos.secao_main}>
        <Categorias 
          handleFiltrarProduto={handleFiltrarProduto}
          botaoClicado={botaoClicado}
        />

        <CampoDeBusca 
          textoBusca={textoBusca}
          handleBuscarProduto={handleBuscarProduto}
        />
        <section className={estilos.secao_cards}>
        <h2>Cárdapio</h2>

        <div className={estilos.container_cards}>
          {dadosFiltrados.map((produto) => (
            <Cards key={produto.id} produto={produto} />
          ))}
        </div>
        </section>
      </main>
    </>
  );
}
