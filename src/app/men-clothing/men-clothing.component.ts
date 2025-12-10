import { Component, OnInit } from '@angular/core';
import { Modelos } from '../../Model/modelo';
import { ModelosService } from '../Service/modelos.service';
import { Router } from '@angular/router';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-men-clothing',
  templateUrl: './men-clothing.component.html',
  styleUrl: './men-clothing.component.css',
  providers: [ModelosService]
})
export class MenClothingComponent implements OnInit {

  public menClothing: Modelos[] = []

  constructor(
    private _modelosService: ModelosService,
    private _router: Router,
    private cartService: CartService
  ) {

  }

  ngOnInit(): void {
    this.getMenClothing()
  }

  getMenClothing() {
    this._modelosService.getMenClothing().subscribe({
      next: (response) => this.menClothing = response,
      error: (err) => console.log(<any>err),
      complete: () => console.log(this.menClothing)
    })
  }

  addCart(menClothing: Modelos, number: number) {
    this.cartService.addProductCart(menClothing);
    this.cartService.addNumbersItem(number);
  };

  detailProduct(id: number) {
    this._router.navigate(['productos/', id])
  }

  backToProducts() {
    this._router.navigate(['/productos'])
  }

}
