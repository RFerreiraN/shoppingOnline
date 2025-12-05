import { Component, OnInit } from '@angular/core';
import { Modelos } from '../../Model/modelo';
import { ModelosService } from '../Service/modelos.service';
import { CartService } from '../Service/cart.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  providers: [ModelosService]
})
export class ProductosComponent implements OnInit{
    public productos: Modelos [];
    public productId : number;
    public jewerlys : Modelos [];
    public electronics : Modelos [];
    public menClothing : Modelos [];
    public womenClothing : Modelos [];
    public categories: Modelos [];

    
  
  constructor(
    private _modelosServices: ModelosService,
    private _router: Router,
    private cartService : CartService,
  ){
      this.productos = [];
      this.productId = 1;
      this.jewerlys = [];
      this.electronics = [];
      this.menClothing = [];
      this.womenClothing = [];
      this.categories = [];
      
  }

  ngOnInit(): void {
    this._modelosServices.getProductos().subscribe( productos => {
    this.productos = productos;
  })
  }


 getJewerly(){
  this._modelosServices.getJewerly().subscribe({
    next : (response) => this.jewerlys = response,
    error : (err) => console.log(<any>err),
    complete : () => console.log(this.jewerlys)
  })
 }

 getElectronic(){
  this._modelosServices.getElectronic().subscribe({
    next : (response) => this.electronics = response,
    error : (err) => console.log(<any>err),
    complete : () => console.log(this.electronics)
  })
 }
 getMenClothing(){
  this._modelosServices.getMenClothing().subscribe({
    next : (response) => this.menClothing = response,
    error : (err) => console.log(<any>err),
    complete : () => console.log(this.menClothing)
  })
 }

 getWomenClothing(){
  this._modelosServices.getWomenClothing().subscribe({
    next : ( response ) => this.womenClothing = response,
    error : ( err ) => console.log(<any>err),
    complete : () => console.log(this.womenClothing)
  })
 }

 addCart(producto : Modelos, number : number){
    this.cartService.addProductCart(producto); 
    this.cartService.addNumbersItem(number);
 }

 detailProduct(id : number){
    this._router.navigate(['productos/', id])
 }

 


}
