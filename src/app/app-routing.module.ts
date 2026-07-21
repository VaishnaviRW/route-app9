import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home/home.component';
import { ProductsComponent } from './component/product/products/products.component';
import { UsersComponent } from './component/users/users/users.component';
import { FairsComponent } from './component/fairs/fairs/fairs.component';
import { ProductformComponent } from './component/product/productform/productform.component';
import { SinglproductComponent } from './component/product/singlproduct/singlproduct.component';
import { UserformComponent } from './component/users/userform/userform.component';
import { SingleuserComponent } from './component/users/singleuser/singleuser.component';
import { FairDescriptionComponent } from './component/fairs/fair-description/fair-description.component';
import { AuthComponent } from './component/auth/auth.component';
import { AuthGardService } from './services/auth-gard.service';
import { UserRoleGardService } from './services/user-role-gard.service';
import { CanDeactivateService } from './services/can-deactivate.service';
import { ProductResolverService } from './services/product.resolver.service';
import { UserResolverService } from './services/user-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate : [AuthGardService, UserRoleGardService],
    data : {
      userRole : ['buyer', 'admin', 'superAdmin']
    }
  },
  {
    path: 'product',
    component: ProductsComponent,
    resolve : {
      product : ProductResolverService
    },
    canActivate : [UserRoleGardService],
    canActivateChild : [AuthGardService],
    data : {
      userRole : ['buyer', 'admin', 'superAdmin']
    },
    children: [
      {
        path: 'adduser',
        component: ProductformComponent
      },
      {
        path: ':id',
        component: SinglproductComponent
      },
      {
        path: ':id/edit',
        component: ProductformComponent,
        canDeactivate : [CanDeactivateService]
      }
    ]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate : [AuthGardService, UserRoleGardService],
    resolve : {
      user : UserResolverService
    },
    data : {
      userRole : ['admin', 'superAdmin']
    },
    children: [
      {
        path: 'userAdd',
        component: UserformComponent
      },
      {
        path: ':id',
        component: SingleuserComponent
      },
      {
        path: ':id/edit',
        component: UserformComponent,
        canDeactivate : [CanDeactivateService]
      }
    ]
  },
  {
    path: 'fairs',
    component: FairsComponent,
    canActivate : [AuthGardService, UserRoleGardService],
    data : {
      userRole : ['superAdmin']
    },
    children : [
      {
        path : ':id',
        component : FairDescriptionComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
