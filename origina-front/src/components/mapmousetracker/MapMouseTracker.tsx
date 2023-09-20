import { useMapEvents } from "react-leaflet";

export const MapMouseTracker = ({ onMapMouseMove }: any) => {
  const map = useMapEvents({
    mousemove: (event) => {
      onMapMouseMove(event);
    },
  });

  return null;
};
