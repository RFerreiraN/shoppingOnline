import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { AreaPersonalComponent } from './area-personal/area-personal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CestaComponent } from './cesta/cesta.component';
import { ErrorComponent } from './error/error.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JewerlyComponent } from './jewerly/jewerly.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { SessionComponent } from './session/session.component';
import { ProductosDatalleComponent } from './productos-datalle/productos-datalle.component';



const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:productoId', component: ProductosDatalleComponent},
  {path: 'productos/category/jewerly' , component: JewerlyComponent},
  {path: 'productos/category/electronics' , component: ElectronicsComponent},
  {path: 'productos/category/men-clothing' , component: MenClothingComponent},
  {path: 'productos/category/women-clothing' , component: WomenClothingComponent},
  {path: 'area-personal', component: AreaPersonalComponent},
  {path: 'sesion', component: SessionComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'cesta', component: CestaComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
