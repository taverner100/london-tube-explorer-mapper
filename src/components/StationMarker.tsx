
import { Station } from "@/types/tube";
import { cn } from "@/lib/utils";

type StationMarkerProps = {
  station: Station;
  color: string;
  isVisited: boolean;
  onClick: () => void;
  isInterchange?: boolean;
};

const StationMarker = ({ station, color, isVisited, onClick, isInterchange }: StationMarkerProps) => {
  return (
    <div 
      className={cn(
        "absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group",
        "transition-all duration-200 ease-in-out",
      )}
      style={{ left: `${station.x}%`, top: `${station.y}%` }}
      onClick={onClick}
      title={station.name}
    >
      <div 
        className={cn(
          "w-3 h-3 rounded-full border-2 group-hover:scale-125 relative",
          isVisited ? "bg-white" : "bg-gray-100",
          isInterchange ? "w-4 h-4" : "w-3 h-3"
        )}
        style={{ 
          borderColor: color,
          backgroundColor: isVisited ? color : "#fff"
        }}
      >
        {isVisited && (
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full flex items-center justify-center">
            <div className="text-green-500 text-xs">✓</div>
          </div>
        )}
      </div>
      <div className={cn(
        "opacity-0 group-hover:opacity-100 absolute top-5 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs whitespace-nowrap z-10 transition-opacity",
        isVisited ? "text-green-600 font-medium" : "text-gray-800"
      )}>
        {station.name}
      </div>
    </div>
  );
};

export default StationMarker;
