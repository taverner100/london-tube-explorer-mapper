
import { TubeLine as TubeLineType } from "@/types/tube";
import StationMarker from "./StationMarker";
import { cn } from "@/lib/utils";

type TubeLineProps = {
  line: TubeLineType;
  visitedStations: Record<string, boolean>;
  onToggleStation: (id: string) => void;
};

const TubeLine = ({ line, visitedStations, onToggleStation }: TubeLineProps) => {
  // Create SVG path for the line
  const generatePathData = () => {
    if (line.stations.length === 0) return "";
    
    // Start from the first station
    let pathData = `M ${line.stations[0].x} ${line.stations[0].y}`;
    
    // Add line segments to each following station
    for (let i = 1; i < line.stations.length; i++) {
      pathData += ` L ${line.stations[i].x} ${line.stations[i].y}`;
    }
    
    return pathData;
  };

  return (
    <div className="relative">
      {/* Line SVG */}
      <svg 
        className="absolute top-0 left-0 w-full h-full" 
        style={{ zIndex: 0 }}
        preserveAspectRatio="none"
      >
        <path 
          d={generatePathData()} 
          stroke={line.color} 
          strokeWidth="2" 
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      
      {/* Station markers */}
      {line.stations.map((station) => (
        <StationMarker 
          key={station.id}
          station={station}
          color={line.color}
          isVisited={!!visitedStations[station.id]}
          onClick={() => onToggleStation(station.id)}
          isInterchange={!!station.interchange && station.interchange.length > 0}
        />
      ))}
    </div>
  );
};

export default TubeLine;
