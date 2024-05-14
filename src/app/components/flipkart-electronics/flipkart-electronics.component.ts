import { Component } from '@angular/core';
import { FakeProductContract } from '../../contracts/fakeproductscontract';
import { FirstwebService } from '../../services/firstweb.service';

@Component({
  selector: 'app-flipkart-electronics',
  templateUrl: './flipkart-electronics.component.html',
  styleUrl: './flipkart-electronics.component.css'
})
export class FlipkartElectronicsComponent {
constructor(private serv:FirstwebService){}
public products:FakeProductContract[]=[];

ngOnInit() {
  this.serv.GetProductByName('electronics').subscribe(res=>{
    this.products=res;
  })
}
}
