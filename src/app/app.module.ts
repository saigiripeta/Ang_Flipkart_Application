import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlipkartDetailsComponent } from './components/flipkart-details/flipkart-details.component';
import { FlipkartElectronicsComponent } from './components/flipkart-electronics/flipkart-electronics.component';
import { FlipkartHomeComponent } from './components/flipkart-home/flipkart-home.component';
import { FlipkartIndexComponent } from './components/flipkart-index/flipkart-index.component';
import { FlipkartJeweleryComponent } from './components/flipkart-jewelery/flipkart-jewelery.component';
import { FlipkartmensComponent } from './components/flipkartmens/flipkartmens.component';
import { FlipkartwomensComponent } from './components/flipkartwomens/flipkartwomens.component';
import { FlipkartMoreDetailsComponent } from './components/flipkart-more-details/flipkart-more-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AngMaterialComponent } from './ang-material/ang-material.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {   MatDialog} from '@angular/material/dialog';
import { WelcomeComponent } from './components/welcome/welcome.component';




@NgModule({
  declarations: [
    AppComponent,
   
    FlipkartDetailsComponent,
    FlipkartElectronicsComponent,
    FlipkartHomeComponent,
    FlipkartIndexComponent,
    FlipkartJeweleryComponent,
    FlipkartmensComponent,
    FlipkartwomensComponent,
    FlipkartMoreDetailsComponent,
    NotFoundComponent,
    AngMaterialComponent,
    WelcomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
  
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
