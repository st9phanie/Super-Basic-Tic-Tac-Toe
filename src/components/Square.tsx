import React from "react";
import "../App.css"

interface SquareProps {
  val: string;
  chooseSquare: () => void;
}

export const Square = ({val,chooseSquare}:SquareProps) => {
    return (
        <div className="square" onClick={chooseSquare}>
            {val}
        </div>
    )
}