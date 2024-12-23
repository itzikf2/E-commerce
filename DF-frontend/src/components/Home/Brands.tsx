const brands = [
    {
        image:'/img/brands/amorarma.jpeg',
        alt:'Amorarma',
    },
    {
        image:'/img/brands/capicua.jpeg',
        alt:'Capicua',
    },
    {
        image:'/img/brands/elemento.webp',
        alt:'Elemento',
    },
    {
        image:'/img/brands/Adidas_logo.png',
        alt:'Adidas',
    },
    {
        image:'/img/brands/Ame-logo.png',
        alt:'American Eagle',
    },
    {
        image:'/img/brands/ck-logo.png',
        alt:'Calvin Klein',
    },
    {
        image:'/img/brands/nike-logo.jpg',
        alt:'Nike',
    },
    {
        image:'/img/brands/Triumph-logo.png',
        alt:'Triumph',
    },
]

export const Brands = () => {
  return (
      <div className="flex flex-col items-center gap-3 pt-16 pb-12">
          <h2 className="font-bold text-2xl">Marcas que disponemos</h2>

          <p className="w-2/3 text-center text-sm md:text-base">
            Tenemos las mejores marcas y la última moda
          </p>

          {/* Contenedor de la cuadrícula */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-8 w-full">
              {brands.map((brand, index) => (
                  <div
                      key={index}
                      className="flex items-center justify-center p-4"
                  >
                      <img
                          src={brand.image}
                          alt={brand.alt}
                          className="h-[100px] w-[100px] object-contain"
                      />
                  </div>
              ))}
          </div>
      </div>
  );
};
