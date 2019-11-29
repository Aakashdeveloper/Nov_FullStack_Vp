import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from 'src/app/products/product.service';

@Component({
    selector: 'app-prod',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: []
})

export class ProductListComponent implements OnInit{
    
    pageTitle:string = "Product List View";
    imageWidth:number = 80;
    imageMargin:number = 10;
    showImage:boolean = false;
    listFilter:string = "";

    products : IProduct[] = [];

    // creating object for Service or Injecting service
    constructor(private _productService: ProductService){

    }
    
    ngOnInit(): void {
        this._productService.getProducts().subscribe((data) => this.products = data); // HTTP Client

        
    }
   toggleImage() : void {
       this.showImage = !this.showImage;// (!false = true) // (!true == false)
       console.log('Value of ShowImage inside function :: ', this.showImage);
       
   }

   onRatingClicked(message :string) :void{
       console.log("The Event data received :::  ", message);
       this.pageTitle  = "Product List View " + message;
   }
}
