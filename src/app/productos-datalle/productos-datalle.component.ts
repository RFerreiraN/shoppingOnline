import { Component, OnInit } from '@angular/core';
import { ModelosService } from '../Service/modelos.service';
import { ActivatedRoute } from '@angular/router';
import { Modelos } from '../../Model/modelo';
import { CartService } from '../Service/cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-productos-datalle',
  templateUrl: './productos-datalle.component.html',
  styleUrl: './productos-datalle.component.css'
})
export class ProductosDatalleComponent implements OnInit {

  productDetail?: Modelos;
  showFull: boolean = false;

  constructor(
    private _modelosService: ModelosService,
    private _router: ActivatedRoute,
    private _cartService: CartService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this._router.params.subscribe(params => {
      this._modelosService.getProductDetail(params['productoId']).subscribe(data => {
        this.productDetail = data
      })
    })
  }

  addCart(producto: Modelos, id: number) {
    this._cartService.addProductCart(producto);
    this._cartService.addNumbersItem(id);
  }

  toggleDescription() {
    this.showFull = !this.showFull;
  }

  goBack() {
    this.location.back()
  }
}
