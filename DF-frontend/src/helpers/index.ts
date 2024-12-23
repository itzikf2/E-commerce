import { Color, Product, VariantProduct } from "../interfaces";

// formatear precio

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits:3,
    }).format(price)
}

export const prepareProducts = (products: Product[]) => {
    return products.map(product => {
        //Agrupar las variantes por color
        const colors = product.variants.reduce((acc: Color[], variant: VariantProduct) => {
            const existingColor = acc.find(item => item.color === variant.color)

            if (existingColor) {
                // si ya existe el color, comparamos los precios
                existingColor.price = Math.min(existingColor.price, variant.price)
            } // mantenemos el precio minimo
            else {
                acc.push({
                    color: variant.color,
                    price: variant.price,
                    name: variant.color_name,
                });
            }
            return acc;
        }, []);

        //obtener el precio mas bajo de las variantes agrupadas
        const price = Math.min(...colors.map(item => item.price));

        //devolver el producto fomateado
        return {
            ...product,
            price,
            colors: colors.map(({ name, color }) => ({name, color})),
            variants: product.variants,
        }
    });
};