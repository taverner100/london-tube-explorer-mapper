
import { Station } from "@/types/tube";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type MapStationProps = {
  station: Station;
  lineColor: string;
  isVisited: boolean;
  onClick: () => void;
};

const MapStation = ({ station, lineColor, isVisited, onClick }: MapStationProps) => {
  const isInterchange = station.interchange && station.interchange.length > 0;
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200",
            "hover:scale-125 z-10"
          )}
          style={{ 
            left: `${station.x}%`, 
            top: `${station.y}%` 
          }}
          onClick={onClick}
          aria-label={station.name}
        >
          <div
            className={cn(
              "rounded-full border-2 transition-colors",
              isInterchange ? "w-4 h-4" : "w-3 h-3",
              isVisited ? "shadow-md" : ""
            )}
            style={{
              borderColor: lineColor,
              backgroundColor: isVisited ? lineColor : "#fff"
            }}
          >
            {isVisited && (
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full flex items-center justify-center">
                <div className="text-green-500 text-xs">✓</div>
              </div>
            )}
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="text-xs font-medium">
        <p>{station.name}</p>
        <p className={isVisited ? "text-green-600" : "text-gray-600"}>
          {isVisited ? "Visited" : "Not visited"}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

export default MapStation;
