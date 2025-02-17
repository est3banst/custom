import React, { useState, useEffect } from "react";

const GridHero = () => {
  const [numColumns, setNumColumns] = useState(0);
  const [numRows, setNumRows] = useState(0);

  const squareSize = 1; 
  const gapSize = 40;   

  const calcGrid = () => {
    const container = document.getElementById("hero-container");
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const columns = Math.ceil(width / (squareSize + gapSize));
    const rows = Math.ceil(height / (squareSize + gapSize));

    setNumColumns(columns);
    setNumRows(rows);
  };

  useEffect(() => {
    calcGrid();
    window.addEventListener("resize", calcGrid);

    return () => {
      window.removeEventListener("resize", calcGrid);
    };
  }, []);

  return (
    <div
      className="absolute z-20 top-0 left-0 w-full h-full grid"
      style={{
        gridTemplateColumns: `repeat(${numColumns}, ${squareSize + gapSize}px)`,
        gridTemplateRows: `repeat(${numRows}, ${squareSize + gapSize}px)`,
      }}
    >
      {Array.from({ length: numColumns * numRows }).map((_, index) => (
        <div 
        aria-hidden="true"
        key={index} className="bg-[#171717] border-[.2px] border-[#a78bfa]" />
      ))}
    </div>
  );
};

export default GridHero;
