import React, { useState, useEffect } from "react";

const GridHero = () => {
  const [numColumns, setNumColumns] = useState(0);
  const [numRows, setNumRows] = useState(0);
  const [activeColumns, setActiveColumns] = useState([]);
  const [key, setKey] = useState(0); 

  const squareSize = 1; 
  const gapSize = 35;   
  const animationDuration = 4000; 

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
    const addColumnEffect = () => {
      setActiveColumns((prevColumns) => {
        let newColumn;
        do {
          newColumn = Math.floor(Math.random() * numColumns);
        } while (prevColumns.includes(newColumn)); 

        return [...prevColumns.slice(-1), newColumn]; 
      });

      setKey(prevKey => prevKey + 1);
    };

    const interval1 = setInterval(addColumnEffect, animationDuration); 
    const interval2 = setTimeout(() => { 
      setInterval(addColumnEffect, animationDuration); 
    }, animationDuration / 2);

    return () => {
      clearInterval(interval1);
      clearTimeout(interval2);
    };
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

      {activeColumns.map((column, i) => (
        <div 
          key={key + i}
          className="absolute top-0 left-0 w-[4px] -translate-x-[2px] h-1/4 rounded-full bg-[#5f2bfb] animate-flashing-star animate-falling shadow-purple-900" 
          style={{ 
            left: `${column * (squareSize + gapSize)}px`,
            animationDuration: "4s",
          }}
        />
      ))}
    </div>
  );
};

export default GridHero;
