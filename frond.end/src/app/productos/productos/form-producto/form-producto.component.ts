import { CategoriaService } from './../../../categorias/categoria.service';

import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../../producto';

import { EstadoBr } from '../estado-br';
import { Categoria } from 'src/app/categorias/categoria';





@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {
  categorias:Categoria[];
  producto: Producto = new Producto();
  titulo: string = "Agreagar Producto";

  // categorias: EstadoBr [];

  constructor(private productoService:ProductoService,
    private categoriaService:CategoriaService,
     private router:Router, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    // this.categoriaService.getEstadoBr().subscribe(dados =>{
    //   this.categorias = dados;
    //   console.log(dados)
    // })
    this.cargar();
    this.getCategorys();
  }

  public getCategorys(){
    this.categoriaService.getAll().subscribe(
      c =>{this.categorias=c;
      console.log(this.categorias);

      }



    );
  }
  cargar(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.productoService.get(id).subscribe( p =>{
           this.producto = p
            this.producto.categoriaId=this.producto.categoria.id

          }

          );
        }
      }
    );
  }

  create(): void {
    this.productoService.create(this.producto).subscribe(

      res => this.router.navigate(['/productos'])
    );
  }

  update(): void {
    this.productoService.update(this.producto).subscribe(
      res => this.router.navigate(['/productos'])
    );
  }
}
