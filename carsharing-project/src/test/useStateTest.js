import React, {useState} from "react";
import './vss.css'
 function useStateTest(props) {

    //useState Test
    const [number, setNumber] = useState(0);
    const up = () =>{
        console.log('+1');
        // setNumber(number +1);
        setNumber(prevNumber => prevNumber +1 );
    }
    const down = () => {
        console.log('-1');
        // setNumber(number -1);
        setNumber(prevNumber => prevNumber -1);
    }
    return(
    <div>
        <div>
            <h1>이름 : {props.name} </h1>
        </div>
    <h2 className="hh">{number}</h2>
      <button onClick={up}>+1</button>
      <button onClick={down}>-1</button>
      </div>
    );
}
export default useStateTest;