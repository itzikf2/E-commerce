import {MdLocalShipping} from 'react-icons/md'
import { CiCreditCard1, CiBank } from "react-icons/ci";
import { RiDiscountPercentLine } from "react-icons/ri";

export const FeatureGrid = () => {
  return (
      <div className="grid grid-cols-2 gap-8 mt-6 mb-16 lg:grid-cols-4 lg:gap-5">
          <div className="flex item-center gap-6">
              <MdLocalShipping size={40} className="text-slate-600" />
              
              <div className="space-y-1">
                  <p className="font-semibold">Envios</p>
                  <p className='text-sm'>A todo el pais</p>
              </div>
          </div>

          <div className="flex item-center gap-6">
              <CiCreditCard1 size={40} className="text-slate-600" />
              
              <div className="space-y-1">
                  <p className="font-semibold">Tarjetas</p>
                  <p className='text-sm'>Paga con cualquier tarjetas de credito y debito</p>
              </div>
          </div>

          <div className="flex item-center gap-6">
              <CiBank size={40} className="text-slate-600" />
              
              <div className="space-y-1">
                  <p className="font-semibold">Transferencia bancaria</p>
                  <p className='text-sm'>Desde cualquier banco</p>
              </div>
          </div>
          <div className="flex item-center gap-6">
              <RiDiscountPercentLine size={40} className="text-slate-600" />
              
              <div className="space-y-1">
                  <p className="font-semibold">Descuentos</p>
                  <p className='text-sm'>Disfruta de nuestros descuentos</p>
              </div>
          </div>
    </div>
  )
}
