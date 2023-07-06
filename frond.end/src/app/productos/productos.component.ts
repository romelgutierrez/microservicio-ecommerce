import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  titulo:string="Lista de productos";

  productos:Producto[];

  constructor(private productoService:ProductoService){}

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      p =>this.productos=p
    );
  }

  delete(producto:Producto):void{
    console.log("Hello form delete");
    this.productoService.delete(producto.id).subscribe(
      res=>this.productoService.getAll().subscribe(
        response=>this.productos=response
      )
    );
  }
}
