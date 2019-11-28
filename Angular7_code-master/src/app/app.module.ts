import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './shared/books/books.component';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found.component';
import { HomeComponent } from './jome/jome.component';
import { OrderComponent } from './order/order.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    PageNotFoundComponent,
    HomeComponent,
    OrderComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
