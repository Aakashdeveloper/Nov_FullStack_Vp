import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { RandomPipe } from '../shared/random.pipe';
import {ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductDetailsComponent} from './product-details.component';
import { ProductService } from './product.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: 'products', component: ProductListComponent},
            {path: 'product/:id', component: ProductDetailsComponent},
        ])
    ],
    declarations: [
        RandomPipe,
        ProductListComponent,
        ConvertToSpacesPipe,
        ProductFilterPipe,
        StarComponent,
        ProductDetailsComponent
    ],
    providers: [
        ProductService
    ]
})


export class ProductModule {

}
