import React, {useState} from "react";
import './vss.css'
 function useStateTest() {
    //useState Test
    const [Number, SetNumber] = useState(0);
    const up = () =>{
        console.log('+1');
        SetNumber(Number +1);
    }
    const down = () => {
        console.log('-1')
        SetNumber(Number -1);
    }
    return(
    <div>
    <h1 className="hh">{Number}</h1>
      <button onClick={up}>+1</button>
      <button onClick={down}>-1</button>
      </div>
    );
}
export default useStateTest;