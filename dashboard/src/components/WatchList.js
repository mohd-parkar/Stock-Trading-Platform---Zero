import React, { useState , useContext} from "react";
import GeneralContext from './GeneralContext';
import { watchlist } from "../data/data";
// import {Tooltip,Grow} from "@mui/material";
import {BarChart, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";
import { Grow, Tooltip } from "@mui/material";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>


      <ul className="list">
        {watchlist.map((stock,index) =>{
          return(
          <WatchListItem stock ={stock} index = {index}/>
          )
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({stock}) =>{
  // hovering 
  const  [showWatchlistActions,setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
      setShowWatchlistActions(true);
  }

  const handleMouseLeave = (e) => {
      setShowWatchlistActions(false);
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      
      <div className="item" style={{fontSize: "0.75rem"}}>
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span>{stock.percent}</span>
          {stock.isDown?
          <KeyboardArrowDown className="down"/> :  
          <KeyboardArrowUp className="up"/>  
        }
        <span className="price">{stock.price}</span>
        </div>
      </div>
        {showWatchlistActions && <WatchListActions uid={stock.name}/>}
    </li>
  )
}


const WatchListActions = ({uid}) =>{
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    console.log("buy was clicked")
    generalContext.openBuyWindow(uid);
  };

  return(
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow} >
          <button className="buy" onClick={handleBuyClick}>
            Buy
          </button>
        </Tooltip>
      </span>
      <span>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">
            Sell
          </button>
        </Tooltip>
      </span>
      <span>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="icon">
            <BarChart/>
          </button>
        </Tooltip>
      </span>
      <span>
        <Tooltip title="more" placement="top" arrow TransitionComponent={Grow}>
          <button className="icon">
            <MoreHoriz/>  
          </button>
        </Tooltip>
      </span>
    </span>
  )
}