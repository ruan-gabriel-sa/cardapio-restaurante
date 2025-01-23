import estilos from './Categorias.module.css';
import Image from 'next/image';
import Entrada from '../../../../public/entrada.png';
import Massas from '../../../../public/massa.png';
import Carnes from '../../../../public/carne.png';
import Bebidas from '../../../../public/bebidas.png';
import Saladas from '../../../../public/salada.png';
import Sobremesas from '../../../../public/sobremesa.png';

export default function Categorias({ handleFiltrarProduto, botaoClicado }) {

    return(
        <section className={estilos.secao_categoria}>
            <div className={estilos.container_btn}>
                <button onClick={() => handleFiltrarProduto("Entrada")} className={botaoClicado === "Entrada" ? estilos.secao_btn_marcado : estilos.secao_btn}><Image src={Entrada} alt='entrada' /><span>Entrada</span></button>
                <button onClick={() => handleFiltrarProduto("Massas")} className={botaoClicado === "Massas" ? estilos.secao_btn_marcado : estilos.secao_btn}><Image src={Massas} alt='Massas' /><span>Massas</span></button>
                <button onClick={() => handleFiltrarProduto("Carnes")} className={botaoClicado === "Carnes" ? estilos.secao_btn_marcado : estilos.secao_btn}><Image src={Carnes} alt='Carnes' /><span>Carnes</span></button>
                <button onClick={() => handleFiltrarProduto("Bebidas")} className={botaoClicado === "Bebidas" ? estilos.secao_btn_marcado : estilos.secao_btn}><Image src={Bebidas} alt='Bebidas' /><span>Bebidas</span></button>
                <button onClick={() => handleFiltrarProduto("Saladas")} className={botaoClicado === "Saladas" ? estilos.secao_btn_marcado : estilos.secao_btn}><Image src={Saladas} alt='Saladas' /><span>Saladas</span></button>
                <button onClick={() => handleFiltrarProduto("Sobremesas")} className={botaoClicado === "Sobremesas" ? estilos.secao_btn_marcado : estilos.secao_btn}><Image src={Sobremesas} alt='Sobremesas' /><span>Sobremesas</span></button>
            </div>
        </section>
    )
}