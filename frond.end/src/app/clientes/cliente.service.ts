import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  // endpoint
  private url:string="http://localhost:9090/cliente";

  constructor( private http:HttpClient ) { }

  getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente);
  }

  get(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(this.url+'/'+id);
  }

  update(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url, cliente);
  }

  delete(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(this.url+'/'+id);
  }

}

