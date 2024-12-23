import { FeatureGrid } from "../components/Home/FeatureGrid";
import { ProductGrid } from "../components/Home/ProductGrid";
import { Brands } from "../components/Home/Brands";
import {  popularCelulares, recentCelulares } from "../data/initialData";
import { prepareProducts } from "../helpers";

export const HomePage = () => {

    const preparedResentProducts = prepareProducts(recentCelulares);
    const preparedPopularProducts = prepareProducts(popularCelulares);

    

    return (
        <div>
            <FeatureGrid />
            
            <ProductGrid
                title="nuevos productos"
                products={preparedResentProducts} />
            
            <ProductGrid
                title="productos destacados"
                products={preparedPopularProducts}
            />

            <Brands/>
            
           </div>
    )
};
