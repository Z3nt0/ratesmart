import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'; 
<<<<<<< HEAD
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
=======
import { AdminAboutComponent } from './components/admin-about/admin-about.component'; // Import AdminAboutComponent
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component'; // Import AdminSettingsComponent
>>>>>>> b784ddbe4e89fbf9df900438f16630dfcd7b7272

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashScreenComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'admin-dashboard', component: AdminDashboardComponent } ,
  { path: 'admin-profile', component: AdminProfileComponent  } 
=======
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-about', component: AdminAboutComponent },
  { path: 'admin-settings', component: AdminSettingsComponent } // Add route for AdminSettingsComponent
>>>>>>> b784ddbe4e89fbf9df900438f16630dfcd7b7272
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
