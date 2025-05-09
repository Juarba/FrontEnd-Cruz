import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const LayoutFooter = () => {
  return (
    <footer className="w-full py-4" style={{ 
      backgroundImage: 'url(/sand-texture.jpg)', 
      backgroundSize: 'cover',
      color: '#522125'
    }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left Side - Logo and Schedule */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="border-2 border-red-900 rounded-full p-2 mr-2">
                <span className="text-red-900 font-bold text-xl">O</span>
              </div>
              <h3 className="font-bold uppercase">Horarios</h3>
            </div>
            <div className="text-sm">
              <p className="font-bold">FIN DE SEMANA Y FERIADOS</p>
              <p>MATUTINO: 10:00 A 13:00 HS</p>
              <p>PEROSA: 15:00 A 17:00 HS</p>
              <p className="mt-4 font-bold">DÍA DE SEMANA</p>
              <p>MATUTINO: 10:00 A 13:00 HS</p>
              <p>PEROSA: 15:00 A 17:00 HS</p>
            </div>
          </div>

          {/* Middle Columns */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold uppercase mb-4">Temporada</h3>
            <ul className="text-sm">
              <li className="mb-2">DÍA</li>
              <li className="mb-2">DECK</li>
              <li className="mb-2">CAMPING</li>
              <li className="mb-2">RECORRIDO</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold uppercase mb-4">Reglas de convivencia</h3>
            <ul className="text-sm">
              <li className="mb-2">POLÍTICAS DE PRIVACIDAD</li>
              <li className="mb-2">TÉRMINOS Y CONDICIONES</li>
            </ul>
          </div>

          {/* Right Side - Map */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="flex justify-end mb-4">
              <a href="#" className="text-red-900 mx-1">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-red-900 mx-1">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-red-900 rounded-full bg-green-500 p-1 ml-1">
                <FaWhatsapp size={18} color="white" />
              </a>
            </div>
            <div className="bg-white rounded shadow-md p-1">
              <img 
                src="/map-placeholder.jpg" 
                alt="Map" 
                className="w-full h-32 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center text-xs mt-8">
          © 2024 | DISEÑO Y DESARROLLO IDEMCODE
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;