import {NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { HomeComponent } from './jome/jome.component';
import { OrderComponent } from './order/order.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
    {path: 'products', component: ProductListComponent},
    {path: 'product/:id', component: ProductDetailsComponent},
    {path: 'orders', component: OrderComponent},
    {path: 'forms', component: FormsComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
