
import './index.css'
import React from 'react';
import listaAparelhos from '../../components/listaAparelhos/listaAparelhos';

export default function Prod3() {

    const aparelhoNokia = listaAparelhos.find(aparelho => aparelho.modelo === "Iphone 15");

    if (!aparelhoNokia) {
    return (
      <div className="container_produtos">
        <h2>Produto não encontrado</h2>
      </div>
    );
    }

    return (
        <div className="container_produtos">
            <h2>Detalhes do Aparelho Nokia 3310</h2>
            <img src={aparelhoNokia.foto} alt={aparelhoNokia.modelo} width={300} />
            <p>Modelo: {aparelhoNokia.modelo}</p>
            <p>Marca: {aparelhoNokia.marca}</p>
            <p>Ficha Técnica: {aparelhoNokia.descricao}</p>
            <p>Preço: R$ {aparelhoNokia.preco.toFixed(2)}</p>
        </div>
  );
}
