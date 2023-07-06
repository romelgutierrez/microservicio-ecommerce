import { Component, OnInit } from '@angular/core';
import { Venta } from './venta';
import { VentaService } from './venta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  titulo:string="Lista de vetas";
  ventas:Venta [];
  constructor(private ventaService:VentaService, private router:Router, private activatedRoute:ActivatedRoute) {}
  ngOnInit(): void {
    this.ventaService.getAll().subscribe(
      v =>this.ventas=v
    );
  }

delete(venta:Venta):void{
  console.log("Hello form delete");
  this.ventaService.delete(venta.id).subscribe(
    res=>this.ventaService.getAll().subscribe(
      response=>this.ventas=response
    )
  );
}
}
