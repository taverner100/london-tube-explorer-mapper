
import { useState } from "react";
import { useTubeTracker } from "@/hooks/useTubeTracker";
import { tubeLines } from "@/data/tubeData";
import LineMapPath from "./LineMapPath";
import MapStation from "./MapStation";
import MapControls from "./MapControls";

const UndergroundMap = () => {
  const { visitedStations, toggleStation } = useTubeTracker();
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeLines, setActiveLines] = useState<Record<string, boolean>>(
    Object.fromEntries(tubeLines.map(line => [line.id, true]))
  );

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleToggleLine = (lineId: string) => {
    setActiveLines(prev => ({
      ...prev,
      [lineId]: !prev[lineId]
    }));
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1) {
      setPosition(prev => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY
      }));
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-50">
      <MapControls 
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleResetZoom}
        activeLines={activeLines}
        onToggleLine={handleToggleLine}
      />
      
      <div 
        className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseMove={handleDrag}
      >
        <div 
          className="absolute transition-transform duration-200 origin-center"
          style={{ 
            transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
            width: '100%',
            height: '100%'
          }}
        >
          <div className="relative w-full h-full">
            {/* Render the tube lines */}
            {tubeLines.filter(line => activeLines[line.id]).map(line => (
              <LineMapPath key={line.id} line={line} />
            ))}
            
            {/* Render the stations */}
            {tubeLines.filter(line => activeLines[line.id]).map(line => (
              line.stations.map(station => (
                <MapStation
                  key={station.id}
                  station={station}
                  lineColor={line.color}
                  isVisited={!!visitedStations[station.id]}
                  onClick={() => toggleStation(station.id)}
                />
              ))
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UndergroundMap;
