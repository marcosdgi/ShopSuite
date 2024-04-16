import  { Card } from "../components/Card";
import { Header } from "../components/Header";
import cards from "../components/cardsData";
export const Main = () => {
 
  const handleClick=(event)=>{
    console.log("this is a card number"+ {event})
  }
  return (
    <section className="sectionCards">
      <Header/>
      <h1>Main Page</h1>
      <div className="cards">
        {cards.map((element, index) => (
          <Card onClick = {
            handleClick
          }
            key={index}
            number={element.number}
            firstText={element.firstText}
            secondText={element.secondText}
          />
        ))}
      </div>
    </section>
  );
};
