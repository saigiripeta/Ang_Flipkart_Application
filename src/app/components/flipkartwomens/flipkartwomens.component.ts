import { Component } from '@angular/core';
import { FirstwebService } from '../../services/firstweb.service';
import { FakeProductContract } from '../../contracts/fakeproductscontract';

@Component({
  selector: 'app-flipkartwomens',
  templateUrl: './flipkartwomens.component.html',
  styleUrl: './flipkartwomens.component.css'
})
export class FlipkartwomensComponent {
constructor(private serv:FirstwebService){}
public products :FakeProductContract[]=[];

ngOnInit(){
  this.serv.GetProductByName("women's clothing").subscribe(res=>{
    this.products=res;
    
  })
}
}
