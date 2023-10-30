import { Contacto } from "@app/models/backend/contacto";
export { Contacto as ContactoResponse } from '@app/models/backend/contacto';


export type ContactoCreateRequest = Omit<Contacto, 'id' | 'fecha_creacion'>;
