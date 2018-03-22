export class Negocio {
  id?: number;
  nombre?: number;
  categoria_negocio_id?: number;
  logotipo?: string;
  calificacion?: number;
  sitio_web?: string;
  latitud?: number;
  longitud?: number;
  galeria?: string[];
  descripcion_breve?: string;
  descripcion_completa?: any;
  palabras_clave?: any;
  comentarios?: any[];

  constructor() {
    this.galeria = [
      '', '', ''
    ]
    this.descripcion_breve = '',
    this.latitud = 22.7633237;
    this.longitud = -102.5966308;
  }
}
