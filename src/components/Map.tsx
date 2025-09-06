import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map - using a placeholder token for demonstration
    // In production, this should come from environment variables
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-46.6396, -23.5558], // São Paulo coordinates
      zoom: 15,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker for the office location
    const marker = new mapboxgl.Marker({
      color: '#FF6B35'
    })
    .setLngLat([-46.6396, -23.5558])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML(
          '<div style="padding: 10px;"><h3 style="margin: 0 0 5px 0; font-weight: bold;">Meireles Assessoria Contábil</h3><p style="margin: 0;">Av. Paulista, 1000<br>São Paulo - SP</p></div>'
        )
    )
    .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h4 className="font-bold text-sm mb-1">Nosso Escritório</h4>
        <p className="text-xs text-muted-foreground">
          Av. Paulista, 1000<br />
          São Paulo - SP
        </p>
      </div>
    </div>
  );
};

export default Map;