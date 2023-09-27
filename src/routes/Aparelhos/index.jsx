
import './index.css'
import listaAparelhos from '../../components/listaAparelhos/listaAparelhos'
import Button from '../../components/button/button'

export default function Aparelhos(){

    return (
        <div className="container_aparelhos">
            <ul>
                {listaAparelhos.map((aparelho, index) => (
                <li key={index}>
                    <img src={aparelho.foto} alt={aparelho.modelo} width={300} />
                    <p>{aparelho.modelo}</p>
                    <p>Marca: {aparelho.marca}</p>
                    <p>Ficha Técnica: {aparelho.descricao}</p>
                    <p>Preço: R$ {aparelho.preco.toFixed(2)}</p>
                    <a href={aparelho.botao}>Visualizar</a>
                </li>
                ))}
            </ul>
        </div>
    )
}