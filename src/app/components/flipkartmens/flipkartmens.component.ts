import { Component } from '@angular/core';
import { FirstwebService } from '../../services/firstweb.service';
import { FakeProductContract } from '../../contracts/fakeproductscontract';

@Component({
  selector: 'app-flipkartmens',
  templateUrl: './flipkartmens.component.html',
  styleUrl: './flipkartmens.component.css'
})
export class FlipkartmensComponent {
constructor(private serv:FirstwebService){}
public products:FakeProductContract[]=[];

ngOnInit(){
  this.serv.GetProductByName("men's clothing").subscribe(res=>{
    this.products=res;
  })
}
}
