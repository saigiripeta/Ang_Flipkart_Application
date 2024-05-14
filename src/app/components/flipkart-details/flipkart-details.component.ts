import { Component } from '@angular/core';
import { FakeProductContract } from '../../contracts/fakeproductscontract';
import { ActivatedRoute } from '@angular/router';
import { FirstwebService } from '../../services/firstweb.service';

@Component({
  selector: 'app-flipkart-details',
  templateUrl: './flipkart-details.component.html',
  styleUrls: ['./flipkart-details.component.css']
})
export class FlipkartDetailsComponent {
  constructor(private route: ActivatedRoute, private serv: FirstwebService) {}

  public id: any = '';
  public product: FakeProductContract = {
    id: 0,
    title: '',
    description: '',
    image: '',
    price: 0,
    rating: {
      count: 0,
      rate: 0,
    },
    category: ''
  };
  public error: string = '';

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.serv.GetProductID(this.id).subscribe(data => this.product=data);
      this.serv.GetProductID(this.id).subscribe(
        res => {
          this.product = res;
        },
        err => {
          this.error = err.message;
        }
      );
  }

}
