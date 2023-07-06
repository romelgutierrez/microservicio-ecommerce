
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from './venta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentaService {


  private url:string="http://localhost:8083/venta";
  constructor( private http:HttpClient ) { }
  getAll():Observable<Venta[]>{
    return this.http.get<Venta[]>(this.url);
  }

  create(venta:Venta):Observable<Venta>{
    return this.http.post<Venta>(this.url, venta);
  }

  get(id:number):Observable<Venta>{
    return this.http.get<Venta>(this.url+'/'+id);
  }

  update(venta:Venta):Observable<Venta>{
    return this.http.put<Venta>(this.url, venta);
  }

  delete(id:number):Observable<Venta>{
    return this.http.delete<Venta>(this.url+'/'+id);
  }
}
