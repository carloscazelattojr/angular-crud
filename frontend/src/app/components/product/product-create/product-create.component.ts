import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: 'Produto de teste',
    price: 129.98
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe( () =>{
      this.productService.showMessage("Salvando....")
      this.router.navigate(['/products'])
    } )
  }
 
  cancelProduct(): void{
    this.router.navigate(['/products'])
  }

}
