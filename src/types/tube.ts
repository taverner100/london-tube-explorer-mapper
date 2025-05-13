
export type TubeLine = {
  id: string;
  name: string;
  color: string;
  stations: Station[];
};

export type Station = {
  id: string;
  name: string;
  x: number;
  y: number;
  connections: string[]; // IDs of connected stations
  interchange?: string[]; // IDs of connected lines at this station
};

export type VisitedStations = Record<string, boolean>;
