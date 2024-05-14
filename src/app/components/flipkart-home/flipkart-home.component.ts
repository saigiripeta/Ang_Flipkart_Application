import { Component } from '@angular/core';
import { FirstwebService } from '../../services/firstweb.service';
import { FakeProductContract } from '../../contracts/fakeproductscontract';

@Component({
  selector: 'app-flipkart-home',
  templateUrl: './flipkart-home.component.html',
  styleUrl: './flipkart-home.component.css'
})
export class FlipkartHomeComponent {
constructor(private serv:FirstwebService){}

public products:FakeProductContract[]=[];

ngOnInit(){
  this.serv.GetProducts().subscribe(res=>{
    this.products=res;
  })
}
}
