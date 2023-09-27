
import './index.css'
import React from 'react';
import listaAparelhos from '../../components/listaAparelhos/listaAparelhos';

export default function Prod2() {

    const aparelhoFlip = listaAparelhos.find(aparelho => aparelho.modelo === "Samsung Galaxy z Flip3");

    if (!aparelhoFlip) {
    return (
      <div className="container_produtos">
        <h2>Produto não encontrado</h2>
      </div>
    );
    }

    return (
        <div className="container_produtos">
            <h2>Samsung Galaxy z Flip3</h2>
            <img src={aparelhoFlip.foto} alt={aparelhoFlip.modelo} width={300} />
            <p>Modelo: {aparelhoFlip.modelo}</p>
            <p>Marca: {aparelhoFlip.marca}</p>
            <p>Ficha Técnica: {aparelhoFlip.descricao}</p>
            <p>Preço: R$ {aparelhoFlip.preco.toFixed(2)}</p>
        </div>
  );
}
