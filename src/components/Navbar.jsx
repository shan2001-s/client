import "./Navbar.css";
import logo from "../images/logo.png";
import { useContext } from "react";
import { TransationContext } from "../context/TransationContext";

function Navbar() {
   const {ConnectWallet,currentAccount,creatShotAddress} = useContext(TransationContext);
  return (
    <div className="Navbar">
      <div  class=" items-center justify-items-center bg-neutral-600 py-2">


        <div class="grid grid-rows-1 grid-cols-3 items-center justify-items-center">
          <div class="text-white">ETH Transation App</div>
          <div><img className="Nav-logo" src={logo} alt="Logo" /></div>
          <div >
            {
              !currentAccount && (
                <button type="submit" onClick={ConnectWallet} class="rounded-full ... bg-rose-500 px-4 py-2 hover:bg-rose-700 color-white text-gray-50"> connect wallet </button>
              )
            }
            {
              currentAccount && (
                <button type="submit" onClick={ConnectWallet} class="rounded-full ... bg-rose-500 px-4 py-2 hover:bg-rose-700 color-white text-gray-50"> {creatShotAddress} </button>
              )
            }
            
          </div>

        </div>

      </div>



    </div>
  );
}

export default Navbar;
