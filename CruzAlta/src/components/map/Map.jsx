import React from 'react';

const Map = () => {
  const lat = -32.99008972027061;
  const lng = -61.79260268650904;
  const mapsLink = `https://www.google.com/maps?q=${lat},${lng}`;

  return (
    <div className="container mt-5 d-flex justify-content-center">
    
          {/* Mapa embebido */}
          <div className="ratio ratio-16x9 mb-3">
            <iframe
              src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
              title="Ubicacion en el mapa"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>

  );
};

export default Map;
