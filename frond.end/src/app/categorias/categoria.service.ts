import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  obtenerCategorias(){}
  private url:string="http://localhost:9090/categoria";
  constructor( private http:HttpClient) { }


  getAll():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url);
  }

  create(cliente:Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(this.url, cliente);
  }

  get(id:number):Observable<Categoria>{
    return this.http.get<Categoria>(this.url+'/'+id);
  }

  update(cliente:Categoria):Observable<Categoria>{
    return this.http.put<Categoria>(this.url, cliente);
  }

  delete(id:number):Observable<Categoria>{
    return this.http.delete<Categoria>(this.url+'/'+id);
  }
}
