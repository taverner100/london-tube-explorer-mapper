
import { tubeLines } from "@/data/tubeData";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

type MapControlsProps = {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  activeLines: Record<string, boolean>;
  onToggleLine: (lineId: string) => void;
};

const MapControls = ({
  zoom,
  onZoomIn,
  onZoomOut,
  onReset,
  activeLines,
  onToggleLine
}: MapControlsProps) => {
  return (
    <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 bg-white p-3 rounded-lg shadow-md">
      <div className="flex gap-1">
        <Button variant="outline" size="icon" onClick={onZoomIn}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={onZoomOut}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={onReset}>
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="mt-2 text-xs font-medium text-gray-500">Lines:</div>
      <div className="flex flex-wrap gap-1 max-w-[200px]">
        {tubeLines.map(line => (
          <button
            key={line.id}
            onClick={() => onToggleLine(line.id)}
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
            />
            {line.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MapControls;
