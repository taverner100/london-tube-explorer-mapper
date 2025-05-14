
import { useState } from "react";
import { useTubeTracker } from "@/hooks/useTubeTracker";
import { tubeLines } from "@/data/tubeData";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

const OfficialTubeMap = () => {
  const { visitedStations, toggleStation, getVisitedCount, getTotalProgress } = useTubeTracker();
  
  return (
    <div className="flex flex-col h-full">
      {/* Progress information */}
      <div className="bg-white p-4 border-b">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-100 text-green-800">
                {getVisitedCount()} stations visited
              </Badge>
              <div className="text-sm text-gray-500">
                {getTotalProgress().toFixed(1)}% complete
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map container */}
      <div className="relative flex-1 overflow-auto bg-gray-100 flex justify-center items-center p-4">
        <div className="relative max-w-full h-auto">
          <AspectRatio ratio={1.4} className="min-w-[800px] w-full">
            <img 
              src="/lovable-uploads/67bd0bb5-9fe8-4ada-8571-7f34067c5d58.png" 
              alt="London Underground Map" 
              className="w-full h-full object-contain"
              onError={(e) => {
                console.error("Image failed to load");
                const target = e.target as HTMLImageElement;
                target.style.border = "1px solid red";
                target.style.padding = "20px";
                target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23FF0000' width='100' height='100'/%3E%3Ctext fill='%23FFFFFF' font-family='Arial' font-size='14' x='10' y='50'%3EImage Error%3C/text%3E%3C/svg%3E";
              }}
            />
          </AspectRatio>
          
          {/* Overlay clickable stations */}
          {tubeLines.flatMap(line => 
            line.stations.map(station => (
              <div
                key={station.id}
                className={`absolute w-4 h-4 rounded-full cursor-pointer 
                  ${visitedStations[station.id] ? 'bg-green-500 border-2 border-white' : 'bg-transparent'}
                  hover:scale-150 transition-all duration-200`}
                style={{
                  left: `${station.x}%`,
                  top: `${station.y}%`,
                  opacity: visitedStations[station.id] ? 1 : 0.6,
                  zIndex: 10
                }}
                onClick={() => toggleStation(station.id)}
                title={station.name}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OfficialTubeMap;
