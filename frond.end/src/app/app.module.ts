import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormClienteComponent } from './clientes/form-cliente.component';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FormCategoriaComponent } from './categorias/form-categoria.component';
import { ProductosComponent } from './productos/productos.component';
import { FormProductoComponent } from './productos/productos/form-producto/form-producto.component';
import { CategoriaService } from './categorias/categoria.service';
import { VentasComponent } from './ventas/ventas.component';
import { LayoutModule } from './layout/layout.module';

const routes:Routes=[
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'clientes', component:ClientesComponent },
  { path:'clientes/form', component:FormClienteComponent },
  { path:'clientes/form/:id', component:FormClienteComponent },

  { path:'categorias', component:CategoriasComponent },
  { path:'categorias/form', component:FormCategoriaComponent },
  { path:'categorias/form/:id', component:FormCategoriaComponent },

  { path:'productos', component: ProductosComponent },
  { path:'productos/form', component:FormProductoComponent },
  { path:'productos/form/:id', component:FormProductoComponent },

  { path:'ventas', component: VentasComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FormClienteComponent,
    HomeComponent,
    CategoriasComponent,
    FormCategoriaComponent,
    ProductosComponent,
    FormProductoComponent,
    VentasComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
