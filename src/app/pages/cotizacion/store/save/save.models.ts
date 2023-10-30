import { Cotizacion } from '@app/models/backend/cotizacion';
export { Cotizacion as CotizacionResponse } from '@app/models/backend/cotizacion';


export type CotizacionCreateRequest = Omit<Cotizacion, 'id' | 'fecha_creacion'>;
