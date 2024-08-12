import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { AdminFormsComponent } from './components/admin-forms/admin-forms.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AdminFormCustomizeComponent } from './components/admin-forms/admin-form-customize/admin-form-customize.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminFormAnalyticsComponent } from './components/admin-forms/admin-form-analytics/admin-form-analytics.component';
import { ForgotPasswordAuthComponent } from './components/forgot-password/forgot-password-auth/forgot-password-auth.component';
import { AdminFormCustomizeLogoComponent } from './components/admin-forms/admin-form-customize/admin-form-customize-logo/admin-form-customize-logo.component';
import { SetPasswordComponent } from './components/forgot-password/set-password/set-password.component';
import { AdminSettingsDeleteComponent } from './components/admin-settings/admin-settings-delete/admin-settings-delete.component';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { UserStartComponent } from './components/user-start/user-start.component';
import { RateSatisfactoryComponent } from './components/end-user/rate-satisfactory/rate-satisfactory.component';

// Do not declare EndUserComponent here
@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    SignUpComponent,
    LoginComponent,
    AdminDashboardComponent,
    AdminProfileComponent,
    AdminSettingsComponent,
    AdminFormsComponent,
    SidenavComponent,
    ChangePasswordComponent,
    AboutPageComponent,
    AdminFormCustomizeComponent,
    ForgotPasswordComponent,
    AdminFormAnalyticsComponent,
    ForgotPasswordAuthComponent,
    AdminFormCustomizeLogoComponent,
    SetPasswordComponent,
    AdminSettingsDeleteComponent,
    UserStartComponent,
    RateSatisfactoryComponent,
    // Remove EndUserComponent from here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
