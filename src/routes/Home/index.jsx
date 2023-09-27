
import './index.css'
import listaAparelhos from '../../components/listaAparelhos/listaAparelhos';

export default function Home(){

    const aparelhoNokia = listaAparelhos.find(aparelho => aparelho.modelo === "Nokia 3310");
    const aparelhoFlip = listaAparelhos.find(aparelho => aparelho.modelo === "Samsung Galaxy z Flip3");


    return (
        <main><h1>Aparelhos em promoção</h1>
            <div className="container_produtos">
                <h2>Detalhes do Aparelho Nokia 3310</h2>
                <img src={aparelhoNokia.foto} alt={aparelhoNokia.modelo} width={300} />
                <p>Modelo: {aparelhoNokia.modelo}</p>
                <p>Marca: {aparelhoNokia.marca}</p>
                <p>Ficha Técnica: {aparelhoNokia.descricao}</p>
                <p>Preço: R$ {aparelhoNokia.preco.toFixed(2)}</p>
            </div>
            <div className="container_produtos">
            <h2>Samsung Galaxy z Flip3</h2>
            <img src={aparelhoFlip.foto} alt={aparelhoFlip.modelo} width={300} />
            <p>Modelo: {aparelhoFlip.modelo}</p>
            <p>Marca: {aparelhoFlip.marca}</p>
            <p>Ficha Técnica: {aparelhoFlip.descricao}</p>
            <p>Preço: R$ {aparelhoFlip.preco.toFixed(2)}</p>
        </div>
        </main>
  );
    }
   


