'use client';

import { useEffect, useRef } from 'react';

type Props = {
  coords: [number, number];
  onChange: (coords: [number, number]) => void;
};

export function YandexMap({ coords, onChange }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const isReady = useRef(false);
  const map = useRef<YMapInstance | null>(null);
  const marker = useRef<YMapMarkerInstance | null>(null);
  const coordsRef = useRef(coords);

  useEffect(() => {
    coordsRef.current = coords;
  }, [coords]);

  const createMarker = (
    YMapMarker: Window['ymaps3']['YMapMarker'],
    coordinates: [number, number],
  ) => {
    const element = document.createElement('div');

    element.innerHTML = `
    <div style="
      width:20px;
      height:20px;
      background:#005bff;
      border:4px solid white;
      border-radius:50%;
      box-shadow:0 4px 12px rgba(0,0,0,.3);
    "></div>
  `;

    element.style.transform = 'translate(-50%, -50%)';
    element.style.zIndex = '1000';

    return new YMapMarker(
      {
        coordinates,
      },
      element,
    );
  };
  useEffect(() => {
    const initMap = async () => {
      if (!window.ymaps3 || !mapRef.current) return;

      await window.ymaps3.ready;

      const { YMap, YMapListener, YMapMarker, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
        window.ymaps3;

      map.current = new YMap(mapRef.current, {
        location: {
          center: coordsRef.current,
          zoom: 16,
        },
      });

      map.current.addChild(new YMapDefaultSchemeLayer());
      map.current.addChild(new YMapDefaultFeaturesLayer());

      marker.current = createMarker(YMapMarker, coordsRef.current);

      map.current.addChild(marker.current);

      isReady.current = true;

      const listener = new YMapListener({
        layer: 'any',
        onClick: (_: unknown, event: { coordinates: [number, number] }) => {
          console.log('CLICK', event.coordinates);

          const { YMapMarker } = window.ymaps3;

          if (marker.current) {
            map.current?.removeChild(marker.current);
          }

          marker.current = createMarker(YMapMarker, event.coordinates);

          map.current?.addChild(marker.current);

          onChange(event.coordinates);
        },
      });

      map.current.addChild(listener);
    };

    initMap();

    return () => {
      map.current?.destroy();
    };
  }, [onChange]);

  // useEffect(() => {
  //   console.log('coords', coords);
  //   if (!map.current) return;
  //   if (marker.current) {
  //     map.current.removeChild(marker.current);

  //     const { YMapMarker } = window.ymaps3;
  //     console.log("1");
  //     marker.current = createMarker(
  //       YMapMarker,
  //       coords
  //     );
  //     console.log("2");
  //     map.current.addChild(marker.current);
  //     console.log("3");
  //   }
  //   map.current.update({
  //     location: {
  //       center: coords,
  //       zoom: 16,
  //       duration: 300,
  //     },
  //   });
  // }, [coords]);
  useEffect(() => {
    if (!isReady.current || !map.current || !marker.current) return;

    const { YMapMarker } = window.ymaps3;

    map.current.removeChild(marker.current);

    marker.current = createMarker(YMapMarker, coords);

    map.current.addChild(marker.current);

    map.current.update({
      location: {
        center: coords,
        zoom: 16,
        duration: 300,
      },
    });
  }, [coords]);

  return <div ref={mapRef} className="h-125 w-full overflow-hidden rounded-2xl" />;
}
