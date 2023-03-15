import React, {useState} from "react";

 function useStateTest() {
    const [Number, SetNumber]= useState(0)
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
    <h1>{Number}</h1>
      <button onClick={up}>+1</button>
      <button onClick={down}>-1</button>
      </div>
    );
}
export default useStateTest;