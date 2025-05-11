import { Component, OnInit } from '@angular/core';
import { PostersService } from '../../core/services/posters.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

productList: any[] = []

constructor(private productService: PostersService){

}


ngOnInit(): void {
    this.getAllProducts();
}

getAllProducts(){
  this.productService.getAllProducts().subscribe((val)=>{
    this.productList = val.data;
    console.log(this.productList)
  })
}
}
