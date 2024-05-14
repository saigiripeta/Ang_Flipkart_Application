import { Component } from '@angular/core';
import { FirstwebService } from '../../services/firstweb.service';
import { FakeProductContract } from '../../contracts/fakeproductscontract';

@Component({
  selector: 'app-flipkart-more-details',
  templateUrl: './flipkart-more-details.component.html',
  styleUrl: './flipkart-more-details.component.css'
})
export class FlipkartMoreDetailsComponent {
constructor(private serv:FirstwebService){}
public products : FakeProductContract[]=[];
ngOnInit(){
  this.serv.GetProducts().subscribe(res=>{
    this.products=res;
  })
}
}
