import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './shared/books/books.component';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found.component';
import { HomeComponent } from './jome/jome.component';
import { OrderComponent } from './order/order.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    PageNotFoundComponent,
    HomeComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'orders', component: OrderComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]),
    ProductModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
