import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, withFetch } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { AreaPersonalComponent } from './area-personal/area-personal.component';
import { CestaComponent } from './cesta/cesta.component';
import { ErrorComponent } from './error/error.component';
import { ContactoComponent } from './contacto/contacto.component';
import { JewerlyComponent } from './jewerly/jewerly.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { TotalComponent } from './total/total.component';
import { PaymentComponent } from './payment/payment.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SessionComponent } from './session/session.component';
import { ProductosDatalleComponent } from './productos-datalle/productos-datalle.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    AreaPersonalComponent,
    CestaComponent,
    ErrorComponent,
    ContactoComponent,
    JewerlyComponent,
    ElectronicsComponent,
    MenClothingComponent,
    WomenClothingComponent,
    TotalComponent,
    PaymentComponent,
    SessionComponent,
    ProductosDatalleComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatBadgeModule,
 
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
