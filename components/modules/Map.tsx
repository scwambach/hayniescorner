import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { mapStyle } from "@/utils";

export const Map = () => {
  const mapContainerStyle = {
    height: "545px",
    width: "100%",
  };

  const center = {
    lat: 37.9626081,
    lng: -87.5621295,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `${process.env.GOOGLE_MAP_API_KEY}`,
    libraries: ["places"],
  });

  if (loadError) return <div>Something went wrong</div>;
  if (!isLoaded) return <div>Map is loading</div>;

  return (
    <div className="map h-full">
      <GoogleMap
        center={center}
        zoom={14.5}
        mapContainerStyle={mapContainerStyle}
        options={{
          disableDefaultUI: true,
          styles: mapStyle,
        }}
      />
    </div>
  );
};
