import { Categoria } from "../categorias/categoria";

export class Producto {
  id:number;
  nombre:String;
  descripcion:String;
  precio:String;
  marca:String;
  modelo:String;
  categoriaId: number;
  categoria: Categoria; // Objeto de tipo Categoria

//   constructor(data?: any) {
//     if (data) {
//       this.id = data.id;
//       this.nombre = data.nombre;
//       this.descripcion = data.descripcion;
//       this.precio = data.precio;
//       this.marca = data.marca;
//       this.modelo = data.modelo;
//       this.categoria = new Categoria(data.categoria);
//   }
//  }
}
