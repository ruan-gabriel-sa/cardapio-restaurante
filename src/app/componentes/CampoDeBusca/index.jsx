import estilos from './CampoDeBusca.module.css';
import Image from 'next/image';
import Lupa from '../../../../public/lupa.png';

export default function CampoDeBusca({ textoBusca, handleBuscarProduto }) {
    return(
        <div className={estilos.container_busca}>
                <Image className={estilos.icone} src={Lupa} alt='lupa' />
                <input 
                type="text"
                value={textoBusca}
                onChange={(event) => handleBuscarProduto(event.target.value)}
                placeholder="Pesquise aqui um dos pratos do nosso cardápio"
                />
        </div>
    )
}