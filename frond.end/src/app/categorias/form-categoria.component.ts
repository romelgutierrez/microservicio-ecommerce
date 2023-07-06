import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent implements OnInit{
  categoria:Categoria = new Categoria();
  titulo:string="Registro de Categoria";


constructor(private categoriaService:CategoriaService, private router:Router, private activatedRoute:ActivatedRoute) {}

ngOnInit(): void {
  this.cargar();
}

cargar():void{
  this.activatedRoute.params.subscribe(
    e=>{
      let id=e['id'];
      if(id){
        this.categoriaService.get(id).subscribe(
          es=>this.categoria=es
        );
      }
    }
  );
}
create():void{
  console.log(this.categoria);
  this.categoriaService.create(this.categoria).subscribe(
    res=>this.router.navigate(['/categorias'])
  );
}

update():void{
  this.categoriaService.update(this.categoria).subscribe(
    res=>this.router.navigate(['/categorias'])
  );
}
}
