import React, { useState, useEffect } from "react";

const GridHero = () => {
  const [numColumns, setNumColumns] = useState(0);
  const [numRows, setNumRows] = useState(0);
  const [activeColumn, setActiveColumn] = useState(null);
  const [key, setKey] = useState(0); 

  const squareSize = 1; 
  const gapSize = 35;   
  const animationDuration = 4 * 1000; 

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveColumn(Math.floor(Math.random() * numColumns));
      setKey(prevKey => prevKey + 1);
    }, animationDuration);

    return () => clearInterval(interval);
  }, [numColumns]);

  return (
    <div className="absolute z-20 top-0 left-0 w-full custom-width-pc h-full grid"
      style={{
        gridTemplateColumns: `repeat(${numColumns}, ${squareSize + gapSize}px)`,
        gridTemplateRows: `repeat(${numRows}, ${squareSize + gapSize}px)`,
      }}
    >
      {Array.from({ length: numColumns * numRows }).map((_, index) => (
        <div 
          aria-hidden="true"
          key={index} 
          className="bg-[#171717] border-[.2px] border-[#a78bfa]" 
        />
      ))}

      {activeColumn !== null && (
        <div 
          key={key}
          className="absolute top-0 left-0 w-[2.5px] h-full bg-[#a78bfa] opacity-50 animate-raydrop" 
          style={{ 
            left: `${activeColumn * (squareSize + gapSize)}px`,
            animationDuration: "4s",
          }}
        />
      )}
    </div>
  );
};

export default GridHero;
