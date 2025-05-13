
import { tubeLines } from "@/data/tubeData";
import { useTubeTracker } from "@/hooks/useTubeTracker";
import TubeLine from "./TubeLine";
import { useState } from "react";

const TubeMap = () => {
  const { 
    visitedStations, 
    toggleStation, 
    resetAllStations, 
    getVisitedCount, 
    getTotalProgress,
    getLineProgress 
  } = useTubeTracker();
  const [scale, setScale] = useState(1);
  const [activeLines, setActiveLines] = useState<Record<string, boolean>>(
    Object.fromEntries(tubeLines.map(line => [line.id, true]))
  );

  const handleToggleLine = (lineId: string) => {
    setActiveLines(prev => ({
      ...prev,
      [lineId]: !prev[lineId]
    }));
  };

  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset all your progress?")) {
      resetAllStations();
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/* Controls */}
      <div className="bg-white p-4 border-b">
        <div className="container mx-auto flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-2xl font-bold">London Tube Tracker</h1>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setScale(prev => Math.min(prev + 0.2, 3))}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                Zoom In
              </button>
              <button 
                onClick={() => setScale(prev => Math.max(prev - 0.2, 0.5))}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                Zoom Out
              </button>
              <button 
                onClick={() => setScale(1)}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                Reset Zoom
              </button>
              <button 
                onClick={handleResetProgress}
                className="p-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-md"
              >
                Reset Progress
              </button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex-1">
              <div className="text-sm text-gray-600">Overall Progress</div>
              <div className="flex items-center mt-1 gap-3">
                <div className="h-3 flex-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
                    style={{ width: `${getTotalProgress()}%` }}
                  />
                </div>
                <div className="text-sm font-medium whitespace-nowrap">
                  {getVisitedCount()} stations
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 items-center">
              {tubeLines.map(line => (
                <button
                  key={line.id}
                  onClick={() => handleToggleLine(line.id)}
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-opacity ${
                    activeLines[line.id] ? "opacity-100" : "opacity-40"
                  }`}
                  style={{ 
                    backgroundColor: `${line.color}20`, 
                    color: line.color,
                    borderColor: line.color
                  }}
                >
                  <span 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: line.color }}
                  ></span>
                  {line.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="flex-1 overflow-auto bg-gray-50 relative">
        <div 
          className="origin-top-left transition-transform duration-200"
          style={{ 
            transform: `scale(${scale})`,
            width: "100%",
            height: "100%"
          }}
        >
          <div className="relative w-full h-full">
            {tubeLines.map(line => (
              activeLines[line.id] && (
                <TubeLine
                  key={line.id}
                  line={line}
                  visitedStations={visitedStations}
                  onToggleStation={toggleStation}
                />
              )
            ))}
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="bg-white p-4 border-t">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {tubeLines.map(line => (
              <div key={line.id} className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-sm mr-2"
                  style={{ backgroundColor: line.color }}
                ></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{line.name} Line</div>
                  <div className="h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div 
                      className="h-full transition-all duration-500"
                      style={{ 
                        width: `${getLineProgress(line.id)}%`,
                        backgroundColor: line.color
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TubeMap;
