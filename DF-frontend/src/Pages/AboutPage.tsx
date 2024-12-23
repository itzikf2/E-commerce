export const AboutPage = () => {
  return (
    <div className="space-y-5">
      {/* Imagen destacada con texto superpuesto */}
      <div className="relative">
        <img
          src="https://arquitecturapanamericana.com/wp-content/uploads/2016/05/CENTRO-EMPRESARIAL-PARALELO-108.jpg"
          alt="Centro empresarial"
          className="h-[500px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold tracking-tight text-center px-4">
            Bienvenido a DF-Store
          </h1>
        </div>
      </div>

      {/* Contenido textual separado */}
      <div className="px-6 md:px-20 lg:px-40 py-8 bg-white flex flex-col gap-6 tracking-tighter leading-7 text-sm font-medium text-slate-800">
        <p>
          En DF-Store, nos dedicamos a ofrecerte una experiencia de compra única, 
          combinando una amplia variedad de productos con precios competitivos y un servicio al cliente excepcional.
        </p>

        <p>
          Nuestro compromiso es garantizar que cada producto que encuentres aquí sea cuidadosamente seleccionado, 
          brindándote calidad y satisfacción en cada compra. Ya sea que busques las últimas tendencias, 
          artículos esenciales o regalos perfectos, ¡tenemos algo para ti!
        </p>

        <h2 className="text-3xl font-semibold tracking-tight mt-8 mb-4">
          ¿Qué estás esperando? ¡Haz tu pedido ahora en DF-Store!
        </h2>

        <p>
          Para más información, no dudes en ponerte en contacto con nosotros a través de nuestro email: 
          <a href="mailto:DF-store@gmail.com" className="text-blue-600 hover:underline">
            DF-store@gmail.com
          </a> 
          o llamando al 
          <a href="tel:+54 123 456 789" className="text-blue-600 hover:underline">
            +54 123 456 789
          </a>.
        </p>
      </div>
    </div>
  );
};
