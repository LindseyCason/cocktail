import React from "react";
import "./CardItem.css";

// const Div = styled.div`
//   color: #fcba03;
//   width: 25%;
//   background-color: #e6d8ca;
//   box-shadow: 5px 5px 5px #8b831260;
//   opacity: 0.95;
//   padding: 10px;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   margin: 10px;
//   border-radius: 3px;
// `;
// const H1 = styled.h1`
//   color: #e39c54;
//   font-family: "Shadows Into Light";
//   opacity: 1;
//   border-bottom: 2px solid white;
//   font-size: 2rem;
// `;

// const H2 = styled.h2`
// color: #8B8312;
// font-family: "Walter Turncoat";
// opacity 1.;
// `;

export const DrinkCard = (props) => {
  return (
    <div className="drinkCardContainer">
      <section id={props.id} className="drinkCardSection">
        <img src={props.img} alt="cocktail" className="drinkImage" />{" "}
        <div className="drinkCardTitle">{props.name}</div>
      </section>
    </div>
  );
};
