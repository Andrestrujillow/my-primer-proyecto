//import { Products } from './../pages/products/products';
import { Injectable } from '@angular/core';


export interface Product{
  id:number;
  nombre:string;
  descripcion:string;
  precio:number;
  imagen:string;
}

@Injectable({
  providedIn: 'root'
})


export class Products {

  private Products:Product[]=[
    {
      id:1,
      nombre:'honda transa lp',
      descripcion:'ideal para ciudad',
      precio: 6500,
      imagen:'/img/gojo4.jpg'

    },
    {
      id:2,
      nombre:'el papucho de gojo',
      descripcion:'ideal para el pueblo',
      precio: 65000,
      imagen:'/img/gojo3.jpg'
    },
    {
       id:3,
      nombre:' aura',
      descripcion:'ideal para anime',
      precio: 650000,
      imagen:'/img/gojo2.jpg'
    }
    
  ]
 
 constructor(){}
 getProducts():Product[]{
  return this.Products;
 }
  
}
