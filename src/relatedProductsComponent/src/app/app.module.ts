import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RelatedProductComponent } from './related-product/related-product.component';


@NgModule({
  declarations: [
    AppComponent,
    RelatedProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CarouselModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
