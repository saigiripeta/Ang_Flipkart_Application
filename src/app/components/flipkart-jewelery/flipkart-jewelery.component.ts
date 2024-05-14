import { Component } from '@angular/core';
import { FakeProductContract } from '../../contracts/fakeproductscontract';
import { FirstwebService } from '../../services/firstweb.service';

@Component({
  selector: 'app-flipkart-jewelery',
  templateUrl: './flipkart-jewelery.component.html',
  styleUrl: './flipkart-jewelery.component.css'
})
export class FlipkartJeweleryComponent {
constructor(private serv:FirstwebService){}
public products:FakeProductContract[]=[];
ngOnInit(){
  this.serv.GetProductByName('jewelery').subscribe(res=>{
    this.products=res;
  })
}
}
