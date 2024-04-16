import { NavBar } from "./NavBar";
export const Header = () => {
  const goShop = "Let's go Shop";
  return (
    <div className="customHeader">
      <div className="mainText">
        <h1>A better prices and services for owners clients</h1>
        <button id="goShopBtn"> {goShop} </button>
      </div>
    </div>
  );
};
