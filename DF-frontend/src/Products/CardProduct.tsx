import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { VariantProduct } from "../interfaces";
import { formatPrice } from "../helpers";

interface Props{
    img: string;
    name: string;
    price: number;
    slug: string;
    colors: { name: string; color: string }[];
    variants: VariantProduct[];
}


export const CardProduct = ({
    img,
    name,
    price,
    slug,
    colors,
    variants,
}: Props) => {
    const [activeColor, setActiveColor] = useState<{
        name: string;
        color: string;
    }>(colors[0]);
    
    const selectedVariant = variants.find(
        variant => variant.color === activeColor.color
    );

    const stock = selectedVariant?.stock || 0;

    return (
        <div className="w-full px-4">
            <div className="flex flex-col gap-4 relative bg-white shadow-md rounded-lg p-4">
                <Link to={`/celulares/${slug}`} className="flex relative group">
                    <div className="flex h-[300px] w-full items-center justify-center">
                        <img
                            src={img}
                            alt={name}
                            className="object-contain h-full w-full"
                        />
                    </div>
                    <button className="bg-white border border-slate-200 absolute w-full bottom-0 py-3 rounded-3xl flex items-center justify-center gap-1 text-sm font-medium hover:bg-stone-100 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <FiPlus />
                        Añadir
                    </button>
                </Link>

                <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold">{name}</p>
                    <p className="text-lg font-semibold">{formatPrice(price)}</p>

                    <div className="flex gap-3">
                        {colors.map(color => (
                            <span
                                key={color.color}
                                className="grid place-items-center w-6 h-6 rounded-full cursor-pointer"
                                onClick={() => setActiveColor(color)}
                            >
                                <span
                                    className="w-5 h-5 rounded-full"
                                    style={{
                                        backgroundColor: color.color,
                                    }}
                                />
                            </span>
                        ))}
                    </div>
                </div>

                {stock === 0 && (
                    <div className="absolute top-2 left-2">
                        <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                            Agotado
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

