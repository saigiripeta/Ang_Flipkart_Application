import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlipkartHomeComponent } from './components/flipkart-home/flipkart-home.component';
import { FlipkartJeweleryComponent } from './components/flipkart-jewelery/flipkart-jewelery.component';
import { FlipkartElectronicsComponent } from './components/flipkart-electronics/flipkart-electronics.component';
import { FlipkartmensComponent } from './components/flipkartmens/flipkartmens.component';
import { FlipkartwomensComponent } from './components/flipkartwomens/flipkartwomens.component';
import { FlipkartDetailsComponent } from './components/flipkart-details/flipkart-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path: '',component:WelcomeComponent},
  {path: 'home', component:FlipkartHomeComponent},
  {path: 'jewelery', component:FlipkartJeweleryComponent},
  {path: 'electronics', component:FlipkartElectronicsComponent},
  {path: 'mens', component:FlipkartmensComponent},
  {path: 'womens', component:FlipkartwomensComponent},
  {path:'details/:id',component:FlipkartDetailsComponent},
  // {path:'**',component:FlipkartDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
