import { useEffect, useState } from "react";
import blogFetch from "../axios/config"
import ListItems from "../components/ListItems";
import List from "../components/List";
import "../components/ListItems.css"
import LoadingGIF from "../../img/loading.gif"
import "../App.css"

export default function Cardapio(){
  const [burguers, setBurguers] = useState([]);

  useEffect(() => {
    blogFetch.get("/produtos").then((response) => setBurguers(response.data));
  }, []);

  return (
    <>
        <div className="container-cardapio">
            <h2>NOSSO MENU...</h2>
        </div>

        <List>
            {
              burguers.length === 0 ? (
                <img src={LoadingGIF} id="LoadingGIF" alt="" />
              ):(
                burguers.map((item) =>(
                    <ListItems nome={item.nome} descricao={item.descricao} preco={item.preco} id={item.id} />
                ))
            )}
        </List>
        
       
    </>
  );
}