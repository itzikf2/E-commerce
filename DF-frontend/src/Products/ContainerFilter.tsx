import { Separator } from "../components/shared/Separator";

const avaliableBrands = [
    'Amorarma',
    'Calvin Klein',
    'Adidas',
    'Elemento',
    'Capicua',
    'American eagle',
    'Nike',
    'Trimuph',
];

export const ContainerFilter = () => {
  return (
      <div className="p-5 border border-slate-200 rounded-lg h-fit">
          <h3 className="font-semibold text-xl mb-4">Filtros</h3>
          {/* Separrador */}
          <Separator/>

          <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium text-black">Marcas</h3>

              <div className="flex flex-col gap-2">
                  {avaliableBrands.map(brand => (
                      <label key={brand} className="inline-flex item-center">
                          <input type="checkbox" className="text-black border-black focus:ring-black accent-black" />
                          <span className="ml-2 text-black text-sm cursor-pointer">
                              {brand}
                          </span>
                      </label>
                  ))}
              </div>
          </div>
    </div>
  )
}
