
import { useState } from "react";
import TubeMap from "@/components/TubeMap";
import UndergroundMap from "@/components/map/UndergroundMap";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>("tracker");

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-center">London Underground Explorer</h1>
      </div>

      <Tabs 
        defaultValue={activeTab} 
        onValueChange={setActiveTab}
        className="flex-1 flex flex-col"
      >
        <div className="flex justify-center border-b bg-white">
          <TabsList className="my-2">
            <TabsTrigger value="tracker">Station Tracker</TabsTrigger>
            <TabsTrigger value="map">Interactive Map</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="tracker" className="flex-1 p-0 m-0">
          <TubeMap />
        </TabsContent>
        
        <TabsContent value="map" className="flex-1 p-0 m-0">
          <UndergroundMap />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
