import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login-first',
    loadChildren: () => import('./auth/login-first/login-first.module').then( m => m.LoginFirstPageModule)
  },
  {
    path: 'login-otp',
    loadChildren: () => import('./auth/login-otp/login-otp.module').then( m => m.LoginOtpPageModule)
  },
  {
    path: '',
    redirectTo: 'login-first',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
