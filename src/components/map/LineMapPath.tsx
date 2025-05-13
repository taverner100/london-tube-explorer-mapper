
import { TubeLine } from "@/types/tube";

const LineMapPath = ({ line }: { line: TubeLine }) => {
  // Create SVG path for the line
  const generatePathData = () => {
    if (line.stations.length === 0) return "";
    
    // Start from the first station
    let pathData = `M ${line.stations[0].x}% ${line.stations[0].y}%`;
    
    // Add line segments to each following station
    for (let i = 1; i < line.stations.length; i++) {
      pathData += ` L ${line.stations[i].x}% ${line.stations[i].y}%`;
    }
    
    return pathData;
  };

  return (
    <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
      <path
        d={generatePathData()}
        stroke={line.color}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LineMapPath;
