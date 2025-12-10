import { Component, OnInit } from '@angular/core';
import { Modelos } from '../../Model/modelo';
import { ModelosService } from '../Service/modelos.service';
import { Router } from '@angular/router';
import { CartService } from '../Service/cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css',
  providers: [ModelosService]
})
export class ElectronicsComponent implements OnInit {

  public electronics: Modelos[]

  constructor(
    private _modelosService: ModelosService,
    private _router: Router,
    private cartService: CartService,
    private location: Location
  ) {
    this.electronics = []
  }

  ngOnInit(): void {
    this.getElectronic()
  }

  getElectronic() {
    this._modelosService.getElectronic().subscribe({
      next: (response) => this.electronics = (response),
      error: (err) => console.log(<any>err),
      complete: () => console.log(this.electronics)
    })
  }

  addCart(electronics: Modelos, number: number) {
    this.cartService.addProductCart(electronics);
    this.cartService.addNumbersItem(number);
  }

  detailProduct(id: number) {
    this._router.navigate(['productos/', id])
  }

  backToProducts() {
    this._router.navigate(['/productos'])
  }
}
