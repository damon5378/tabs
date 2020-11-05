import React, { useState } from "react";

export const Tab = ({children}) => {
  const [highlight, setHighlight] = useState({ left: 0, opacity: 0 });

  const moveHighlight = (e) => {
    setHighlight({
      left: e.nativeEvent.layerX - 150,
    });
  };

  const hideHighlight = (e) => {
    setHighlight({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    });
  };

  return (
    <div className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
      <div className="highlight" style={highlight} />
      {children}
    </div>
  );
};
