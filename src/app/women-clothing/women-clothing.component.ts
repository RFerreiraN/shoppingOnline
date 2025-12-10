import { Component, OnInit } from '@angular/core';
import { Modelos } from '../../Model/modelo';
import { ModelosService } from '../Service/modelos.service';
import { Router } from '@angular/router';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-women-clothing',
  templateUrl: './women-clothing.component.html',
  styleUrl: './women-clothing.component.css',
  providers: [ModelosService]
})
export class WomenClothingComponent implements OnInit {

  public womenClothing: Modelos[] = []

  constructor(
    private _modelosService: ModelosService,
    private _router: Router,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.getWomenClothing()
  }

  getWomenClothing() {
    this._modelosService.getWomenClothing().subscribe({
      next: (response) => this.womenClothing = response,
      error: (err) => console.log(<any>err),
      complete: () => console.log(this.womenClothing)
    })
  }

  addCart(womenClothing: Modelos, number: number) {
    this.cartService.addProductCart(womenClothing);
    this.cartService.addNumbersItem(number)
  }

  detailProduct(id: number) {
    this._router.navigate(['productos/', id])
  }

  backToProducts() {
    this._router.navigate(['/productos'])
  }
}
