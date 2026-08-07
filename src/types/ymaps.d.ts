declare global {
  interface YMapInstance {
    addChild(child: object): void;
    removeChild(child: object): void;
    update(options: {
      location: {
        center: [number, number];
        zoom?: number;
        duration?: number;
      };
    }): void;
    addListener(
      type: string,
      listener: (object: unknown, event: { coordinates: [number, number] }) => void
    ): void;
    destroy(): void;
  }

  interface YMapMarkerInstance {
  update(props: {
    coordinates: [number, number];
  }): void;
}

  interface Window {
    ymaps3: {
      ready: Promise<void>;

      YMap: new (
        element: HTMLElement,
        options: {
          location: {
            center: [number, number];
            zoom: number;
          };
        }
      ) => YMapInstance;

      YMapMarker: new (
        options: {
          coordinates: [number, number];
        },
        element: HTMLElement
      ) => YMapMarkerInstance;

      YMapListener: new (options: {
        layer?: string;
        onClick?: (
          object: unknown,
          event: {
            coordinates: [number, number];
          }
        ) => void;
      }) => YMapListenerInstance;

      YMapDefaultSchemeLayer: new () => object;
      YMapDefaultFeaturesLayer: new () => object;
    };
  }
}

export {};