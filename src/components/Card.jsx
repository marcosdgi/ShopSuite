import PropTypes from "prop-types";
import { useState } from "react";

//Creating the component "Card"
export const Card = ({ number, firstText, secondText }) => {
  //validating props
  Card.propTypes = {
    number: PropTypes.number,
    firstText: PropTypes.string,
    secondText: PropTypes.string,
  };
  //declaring initial state
  const [isClicked, setClickedState] = useState(0);

  //function to handle the state (counter a quantity of clicks to cards)...
  const counterClicks = () => {
    setClickedState(isClicked + 1);
    console.log(`you're clicked this card ${number}, ${isClicked} times`);
  };

  //returning the component structure
  return (
    <div className="Card" onClick={counterClicks}>
      <div className="cardHeader">
        <span>clicked {isClicked} times...</span>
        <h1 className="titleCard">Elemento {number}</h1>
      </div>
      <div className="container-img">
        <img src="/public/Img2.jpeg" width={"100%"} />
      </div>
      <div className="cardBody">
        <div className="firstTextBody">
          <p>{firstText}</p>
        </div>
        <div className="secundaryTextBody">
          <p>{secondText}</p>
        </div>
        <div className="footerCard">
          <p>Copyrigth 2024</p>
        </div>
      </div>
    </div>
  );
};
