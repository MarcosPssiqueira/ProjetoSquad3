import "./Home.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return ( 

  <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/cofb1.jpg"
          alt="First slide"/>
        <Carousel.Caption>
          <h3> Infinity Warfare</h3>
          <p> Retorne às clássicas raízes da franquia, sem deixar de olhar para frente.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/cofb3.jpg"
          alt="Second slide"/>
        <Carousel.Caption>
          <h3> Warzone</h3>
          <p> Esse combo definindo a próxima era da franquia.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/cofb2.jpg"
          alt="Third slide"/>
        <Carousel.Caption>
          <h3>Black Ops</h3>
          <p> Monte seu combo e defina o futuro da sua fome. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </div>

  );

};

export default Home;