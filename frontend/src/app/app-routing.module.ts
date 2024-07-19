import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'; 
import { AdminAboutComponent } from './components/admin-about/admin-about.component'; // Import AdminAboutComponent
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component'; // Import AdminSettingsComponent
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component'; // Import AdminProfileComponent

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashScreenComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-about', component: AdminAboutComponent },
  { path: 'admin-settings', component: AdminSettingsComponent },
  { path: 'admin-profile', component: AdminProfileComponent } // Add route for AdminProfileComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }