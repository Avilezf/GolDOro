import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'list-field',
    loadChildren: () => import('./pages/list-field/list-field.module').then( m => m.ListFieldPageModule)
  },
  {
    path: 'info-field',
    loadChildren: () => import('./pages/info-field/info-field.module').then( m => m.InfoFieldPageModule)
  },
  {
    path: 'reserve-calendar',
    loadChildren: () => import('./pages/reserve-calendar/reserve-calendar.module').then( m => m.ReserveCalendarPageModule)
  },
  {
    path: 'reserve-field',
    loadChildren: () => import('./pages/reserve-field/reserve-field.module').then( m => m.ReserveFieldPageModule)
  },
  {
    path: 'reserve-payment',
    loadChildren: () => import('./pages/reserve-payment/reserve-payment.module').then( m => m.ReservePaymentPageModule)
  },
  {
    path: 'reserve-sucess',
    loadChildren: () => import('./pages/reserve-sucess/reserve-sucess.module').then( m => m.ReserveSucessPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
