import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-detail.component.html'
})


export class ProductDetailComponent implements OnInit{
    id: number;
    details: IProduct[];


    constructor(private route: ActivatedRoute,
                private router: Router,
                private productService: ProductService) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.productService.getProductDetails(this.id)
            .subscribe((res) => this.details = res);
    }

    onBack() {
        this.router.navigate(['/products']);
    }

}


/*
    name: string;
    imageUrl: string;
    description: string;
this.route.queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.imageUrl = data['image'];
                this.description = data['desc']
            });
*/
