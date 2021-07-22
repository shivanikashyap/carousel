import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.scss']
})
export class RelatedProductComponent implements OnInit {

  constructor(private http:HttpClient) { }

  arrCarousel: any;
  
  ngOnInit(): void {
    this.http.get('../assets/data.json').subscribe(
      data => {
        this.arrCarousel = data;	 
         console.log(this.arrCarousel[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  addProduct(product){
    window.open('https://www.distrelec.biz/cart');
  }

}
