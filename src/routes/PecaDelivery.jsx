import React from 'react'
import blogFetch from '../axios/config';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './PecaDelivery.css';
import {Link} from 'react-router-dom';

const PecaDelivery = () => {
  const navigate = useNavigate()

  const [nome, setNome] = useState()
  const [preco, setPreco] = useState()
  const [descricao, setDescricao] = useState()


  // Novo Produto
  const createPost = async (e) => {
    e.preventDefault();

    await blogFetch.post("/produtos", {
      nome: nome,
      preco: preco,
      descricao: descricao
    })
    alert(`Pedido "${nome}" cadastrado com sucesso!`)
  }

  return (
    <div className='wrapper-cadastro'>
      <div className='container-cadastro'>
        <h2>FAÇA SEU PEDIDO</h2>
        <form onSubmit={(e) => createPost(e)}>
          <div>
            <label htmlFor="nome"> Produto:</label>
            <input
              type="text"
              name="nome"
              required
              placeholder="Digite o pedido.."
              id="nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="descricao"> Ingredientes: </label>
            <input
              type="text"
              required
              name="descricao"
              placeholder="Digite os ingredientes.."
              id="descricao"
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="preco">Preço: </label>
            <input
              type="number"
              required
              name="preco"
              placeholder="Digite o preço..."
              id="preco"
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>
          <input className='btn-cadastrar' type="submit" value="Cadastrar hambúrguer" />
        </form>
      </div>
    </div>
  );
}

export default PecaDelivery
