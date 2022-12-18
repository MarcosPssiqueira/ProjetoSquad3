import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./ModalEstilo.css"
import blogFetch from "../axios/config";
import { NavItem } from "react-bootstrap";
Modal.setAppElement("#root");


export default function ListItems({nome, descricao, preco, id}){

    const [modalAberto, SetModalAberto] = useState(false);

    function openModal() {
      SetModalAberto(true);
    }
  
    function closeModal() {
      SetModalAberto(false);
    }

  // Parte para editar o pedido//

  const [nomeBurguer, setNomeBurguer] = useState("")
  const [descricaoBurguer, setDescricaoBurguer] = useState("")
  const [precoBurguer, setPrecoBurguer] = useState("")


  const updateBurguer = async(e) => {
    e.preventDefault();
    await blogFetch.put(`/produtos/${id}`,{
        nome: nomeBurguer,
        descricao: descricaoBurguer,
        preco: precoBurguer,
    })
}

  // Parte para excluir o pedido //

  function deleteBurguer(id) {
    if (!confirm(`Deseja realmente excluir o pedido? "${nome}"?`)) {
    } else {
      fetch(`https://jsonserver-wher.onrender.com/produtos/${id}`, {
        method: "DELETE",
      }).then((result) => {
        result.json().then((resp) => {
          console.warn(resp);
        });
      });
      alert(`Pedido "${nome}" deletado com sucesso! Recarregue a página.`);
    }
  }
  
  // ================================

    return (
      <>
        <li className="itens-cardapio">
          <p>Nome: {nome}</p>
          <p>Ingredientes: {descricao}</p>
          <p>Preço: R$ {preco}</p>
          <div className="container-modal">
          <button className="btn-Editar" onClick={openModal}>Editar pedido.. </button>
          <button className="btn-Excluir" onClick={() => deleteBurguer(id)}>Excluir pedido.</button>
          <Modal
            isOpen={modalAberto}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <div className="wrap-edicao">
              <div>
                <h2>Editar {nome}</h2>
                <form>
                  <div>
                    <label htmlFor="nome"> Pedidos..</label>
                    <input
                      type="text"
                      name="nome"
                      required
                      placeholder="Digite seu pedido.."
                      id="nome"
                      onChange={(e) => setNomeBurguer(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="descricao">Descriçao </label>
                    <input
                      type="text"
                      required
                      name="descricao"
                      placeholder="Digite seus ingredientes..."
                      id="descricao"
                      onChange={(e) => setDescricaoBurguer(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="preco">Preço: </label>
                    <input
                      type="number"
                      required
                      name="preco"
                      placeholder="Digite seu preço.."
                      id="preco"
                      onChange={(e) => setPrecoBurguer(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="botoes">
                <button onClick={updateBurguer}>Editar pedido.</button>
                <button className="button-close" onClick={closeModal}>Fechar{" "}</button>
              </div>
            </div>
          </Modal>
        </div>
        </li>


      </>
    );
}
