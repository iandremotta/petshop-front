import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
import { AuthService } from './services/auth.service';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FramePageComponent,
    children: [
      {
        path: '', component: ProductsPageComponent
      },
      {
        canActivate: [AuthService],
        path: 'cart', component: CartPageComponent
      },
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    children:
      [
        {
          canActivate: [AuthService],
          path: 'pets', component: PetsPageComponent
        }
      ]
  },
  {
    path: 'login', component: LoginPageComponent,
  },
  {
    path: 'profile', component: ProfilePageComponent,
  },
  {
    path: 'signup', component: SignupPageComponent,
  },
  {
    path: 'reset-password', component: ResetPasswordPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }