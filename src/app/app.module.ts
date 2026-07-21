import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar/navbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { ProductsComponent } from './component/product/products/products.component';
import { SinglproductComponent } from './component/product/singlproduct/singlproduct.component';
import { ProductformComponent } from './component/product/productform/productform.component';
import { GetconfirmComponent } from './component/getconfirm/getconfirm.component';
import { HomeComponent } from './component/home/home/home.component';
import { UsersComponent } from './component/users/users/users.component';
import { SingleuserComponent } from './component/users/singleuser/singleuser.component';
import { UserformComponent } from './component/users/userform/userform.component';
import { FairsComponent } from './component/fairs/fairs/fairs.component';
import { FairscardComponent } from './component/fairs/fairscard/fairscard.component';
import { FairDescriptionComponent } from './component/fairs/fair-description/fair-description.component';
import { AuthComponent } from './component/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    SinglproductComponent,
    ProductformComponent,
    GetconfirmComponent,
    HomeComponent,
    UsersComponent,
    SingleuserComponent,
    UserformComponent,
    FairsComponent,
    FairscardComponent,
    FairDescriptionComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatChipsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
