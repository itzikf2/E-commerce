import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
        {/* Enlaces rápidos */}
        <div className="flex-1 m-4">
          <h4 className="text-xl mb-4">Enlaces Rápidos</h4>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="/about" className="text-white hover:underline">
                Sobre Nosotros
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className="text-white hover:underline">
                Tienda
              </a>
            </li>
            <li className="mb-2">
              <a href="/faq" className="text-white hover:underline">
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="flex-1 m-4">
          <h4 className="text-xl mb-4">Contáctanos</h4>
          <p>Email: DF.store@gmail.com</p>
          <p>Teléfono: +54 123 456 789</p>
          <p>Horario: Lun-Vie 9:00 AM - 6:00 PM</p>
        </div>

        {/* Redes sociales */}
        <div className="flex-1 m-4">
          <h4 className="text-xl mb-4">Síguenos</h4>
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-4 text-white text-2xl hover:opacity-75"
            >
              <RiTiktokLine />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-4 text-white text-2xl hover:opacity-75"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-4 text-white text-2xl hover:opacity-75"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 pt-6 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} DF store. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
