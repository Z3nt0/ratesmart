import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'; 
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component'; // Import AdminSettingsComponent
import { AdminFormsComponent } from './components/admin-forms/admin-forms.component'; 
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component'; // Import AdminProfileComponent
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashScreenComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-about', component: AdminAboutComponent },
  { path: 'admin-settings', component: AdminSettingsComponent }, 
  { path: 'admin-forms', component: AdminFormsComponent }
  { path: 'admin-settings', component: AdminSettingsComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'about-page', component: AboutPageComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }