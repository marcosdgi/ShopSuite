import { useState } from "react";
import { Card } from "../components/Card";

export const Products = () => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <main className="mainContainerPageProducts">
      <div className="container">
        <div className="textHeaderProducts">
          <h1>¿What do you think buy?</h1>
        </div>
      </div>
      <header className="headerPageProducts"></header>
      <section className="containerProductsBody">
        <aside className="asideCatergories">
          <ul
            className="navBar asideBar"
            onClick={() => setVisibility(true)}
            onMouseLeave={() =>setVisibility(false)}
          >
            <button className="btnNav">Categories</button>
        
            {isVisible && (  <div>
                <li>
                  <button className="btnNav">Music</button>
                </li>
                <li>
                  <button className="btnNav">Games</button>
                </li>
                <li>
                  <button className="btnNav">Movies</button>
                </li>
                <li>
                  <button className="btnNav">Series</button>
                </li>
              </div>
            )}
          </ul>
        </aside>
        <div className="containerCards">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
};
