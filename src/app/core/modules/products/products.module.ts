import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../interceptors/TokenInterceptor';
import { ProductsComponent } from '../../../products/products.component';
import { MoneyPipe } from '../../pipes/money.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    MoneyPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class ProductsModule { }
