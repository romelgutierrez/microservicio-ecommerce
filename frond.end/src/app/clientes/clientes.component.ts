import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  titulo:string="Lista de Clientes";
  clientes:Cliente[];

  constructor(private clienteService:ClienteService){}

  ngOnInit(): void {
    this.clienteService.getAll().subscribe(
      c =>this.clientes=c
    );
  }

delete(cliente:Cliente):void{
  console.log("Hello form delete");
  this.clienteService.delete(cliente.id).subscribe(
    res=>this.clienteService.getAll().subscribe(
      response=>this.clientes=response
    )
  );
}

}
