import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductService } from 'src/app/products/product.service';

@Component({
    templateUrl: './product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {
    id;
    details: any[];
    constructor(private route: ActivatedRoute,
                private router: Router,
                private productService: ProductService) { }

    ngOnInit(): void {
       this.id = this.route.snapshot.params['id'];
       this.productService.getProductDetails(this.id)
        .subscribe((item) => this.details = item);
    }

}



/*
  name;
    desc;
    img;
    constructor(private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit(): void {
        this.route.queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.desc = data['details'];
                this.img = data['img'];
            });
    }
*/