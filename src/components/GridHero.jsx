import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const GridHero = () => {
  const [numColumns, setNumColumns] = useState(0);
  const [numRows, setNumRows] = useState(0);
  const [gridLoaded, setGridLoaded] = useState(false);
  const [activeColumns, setActiveColumns] = useState([]);

  const squareSize = 1;
  const gapSize = 35;
  const animationDuration = 0.04; // Speed per cell
  const flashingDuration = 4; // Duration of falling light animation

  // Calculate grid size dynamically
  const calcGrid = () => {
    const container = document.getElementById("hero-container");
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    setNumColumns(Math.ceil(width / (squareSize + gapSize)));
    setNumRows(Math.ceil(height / (squareSize + gapSize)));
  };

  useEffect(() => {
    calcGrid();
    window.addEventListener("resize", calcGrid);
    return () => window.removeEventListener("resize", calcGrid);
  }, []);

  // Create an array of grid items
  const gridItems = useMemo(() => {
    return Array.from({ length: numColumns * numRows }).map((_, index) => ({
      key: index,
      delay:
        Math.floor(index / numColumns) * animationDuration +
        (index % numColumns) * 0.01, // Staggered effect
    }));
  }, [numColumns, numRows]);

  // Detect when the grid is fully loaded
  useEffect(() => {
    if (gridItems.length > 0) {
      const lastItemDelay = gridItems[gridItems.length - 1].delay;
      setTimeout(() => setGridLoaded(true), (lastItemDelay + 0.3) * 1000);
    }
  }, [gridItems]);

  // Start active column animation when the grid is fully loaded
  useEffect(() => {
    if (!gridLoaded) return;

    const addColumnEffect = () => {
      setActiveColumns((prevColumns) => {
        let newColumn;
        do {
          newColumn = Math.floor(Math.random() * numColumns);
        } while (prevColumns.includes(newColumn));

        return [...prevColumns.slice(-1), newColumn]; // Keep only the latest column
      });
    };

    const interval = setInterval(addColumnEffect, flashingDuration * 1000);
    return () => clearInterval(interval);
  }, [gridLoaded, numColumns]);

  return (
    <div
      id="hero-container"
      className="absolute z-20 top-0 left-0 w-full h-full grid"
      style={{
        gridTemplateColumns: `repeat(${numColumns}, ${squareSize + gapSize}px)`,
        gridTemplateRows: `repeat(${numRows}, ${squareSize + gapSize}px)`,
      }}
    >
      {/* Grid cells */}
      {gridItems.map(({ key, delay }) => (
        <motion.div
          key={key}
          className="bg-[#171717] border-[.2px] border-[#a78bfa]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay }}
        />
      ))}

      {/* Active columns animation (only starts after grid is fully loaded) */}
      {gridLoaded &&
        activeColumns.map((column, i) => (
          <motion.div
            key={`falling-${i}`}
            className="absolute top-0 left-0 w-[4px] -translate-x-[2px] h-1/4 rounded-full bg-[#5f2bfb]"
            style={{
              left: `${column * (squareSize + gapSize)}px`,
            }}
            initial={{ opacity: .4, y: -50 }}
            animate={{ opacity: 1, y: "100vh" }}
            transition={{ duration: flashingDuration, repeat: Infinity, ease: "linear" }}
          />
        ))}
    </div>
  );
};

export default GridHero;
