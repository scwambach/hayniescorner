import React, { useState } from 'react';

const Overlay = () => {
  const [currentOverlay, setCurrentOverlay] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);
  const [fade, setFade] = useState<number>(25);
  const [position, setPosition] = useState<number>(0);
  return (
    <>
      <div className="fixed top-0 left-0 z-50">
        <button
          className="text-white"
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? 'CLOSE' : 'OPEN'}
        </button>
        {active && (
          <>
            <input
              type="range"
              defaultValue={fade}
              onChange={(e) => {
                setFade(Math.round(parseInt(e.target.value)));
              }}
            />
            <input
              type="range"
              defaultValue={position}
              min={-200}
              max={200}
              onChange={(e) => {
                setPosition(Math.round(parseInt(e.target.value)));
              }}
            />
            <select
              onChange={(e) => {
                setCurrentOverlay(e.target.value);
              }}
            >
              <option value="none">none</option>
              <option value="page1">page1</option>
              <option value="page2">page2</option>
              <option value="page3">page3</option>
              <option value="page4">page4</option>
              <option value="page5">page5</option>
            </select>
          </>
        )}
      </div>
      {active && (
        <>
          {currentOverlay !== '' && currentOverlay !== 'none' && (
            <img
              className="absolute top-0 left-1/2 -translate-x-1/2 z-40"
              src={`/overlays/${currentOverlay}.jpg`}
              style={{
                pointerEvents: 'none',
                top: `${position}px`,
                opacity: `${fade / 100}`,
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default Overlay;
