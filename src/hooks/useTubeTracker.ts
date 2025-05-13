
import { useState, useEffect } from 'react';
import { VisitedStations } from '@/types/tube';
import { getAllStations, tubeLines } from '@/data/tubeData';

export const useTubeTracker = () => {
  const [visitedStations, setVisitedStations] = useState<VisitedStations>({});
  const [loaded, setLoaded] = useState(false);

  // Load saved data on mount
  useEffect(() => {
    const savedData = localStorage.getItem('tube-tracker-visited');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setVisitedStations(parsed);
      } catch (e) {
        console.error("Failed to parse saved tube tracker data", e);
      }
    }
    setLoaded(true);
  }, []);

  // Save data when it changes
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('tube-tracker-visited', JSON.stringify(visitedStations));
    }
  }, [visitedStations, loaded]);

  // Toggle a station's visited status
  const toggleStation = (stationId: string) => {
    setVisitedStations(prev => ({
      ...prev,
      [stationId]: !prev[stationId]
    }));
  };

  // Reset all data
  const resetAllStations = () => {
    setVisitedStations({});
  };

  // Get total visited count
  const getVisitedCount = () => {
    return Object.values(visitedStations).filter(Boolean).length;
  };

  // Get progress percentage
  const getTotalProgress = () => {
    const totalStations = Object.keys(getAllStations()).length;
    const visitedCount = getVisitedCount();
    return totalStations > 0 ? (visitedCount / totalStations) * 100 : 0;
  };

  // Get progress for a specific line
  const getLineProgress = (lineId: string) => {
    const line = tubeLines.find(l => l.id === lineId);
    if (!line) return 0;
    
    const stationCount = line.stations.length;
    let visitedCount = 0;
    
    line.stations.forEach(station => {
      if (visitedStations[station.id]) {
        visitedCount++;
      }
    });
    
    return stationCount > 0 ? (visitedCount / stationCount) * 100 : 0;
  };

  return {
    visitedStations,
    toggleStation,
    resetAllStations,
    getVisitedCount,
    getTotalProgress,
    getLineProgress,
    loaded
  };
};
