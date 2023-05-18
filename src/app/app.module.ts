import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormProductComponent } from './form-product/form-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ProduitComponent } from './produit/produit.component';

const ROUTES:Routes=[
  {path:'add' , component:AddProductComponent},
  {path:'produit' , component:ProduitComponent},
  {path:'toList' , component:TodoListComponent},
  {path:'form' , component:FormComponent},
  {path:'**' , component:NotFoundComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormProductComponent,
    AddProductComponent,
    NotFoundComponent,
 
    TodoListComponent,
      ProduitComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES ),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
