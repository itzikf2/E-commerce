import { allCelulares } from "../data/initialData"
import { prepareProducts } from "../helpers"
import { CardProduct } from "../Products/CardProduct"
import { ContainerFilter } from "../Products/ContainerFilter"

function Clothes() {
const PreparedProducts = prepareProducts(allCelulares)

  return (
      <>
      <h1 className="text-5xl font-semibold text-center mb-12">
          Productos
      </h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {/* filtros */}
        <div className="md:col-span-1">
          <ContainerFilter/>
        </div>

        <div className="md:col-span-2 lg:col-span-3 xl:col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-10">
            {PreparedProducts.map(product => (
              <CardProduct
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    colors={product.colors}
                    img={product.images[0]}
                    slug={product.slug}
                    variants={product.variants}
                />
            ))}
          </div>
          {/* todo paginacion */}
        </div>
      </div>
      </>
  )
}

export default Clothes