import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './shared/books/books.component';
import { RandomPipe } from './shared/random.pipe';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found.component';
import { ProductListComponent } from 'src/app/products/product-list.component';
import { ConvertToSpacesPipe } from 'src/app/shared/convert-to-spaces.pipe';
import { ProductFilterPipe } from 'src/app/products/product-filter.pipe';
import { StarComponent } from 'src/app/shared/star.component';
import { ProductService } from 'src/app/products/product.service';
import { HomeComponent } from './jome/jome.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './products/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    RandomPipe,
    PageNotFoundComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductFilterPipe,
    StarComponent,
    HomeComponent,
    OrderComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'product/:id', component: ProductDetailsComponent},
      {path: 'orders', component: OrderComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ])

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
