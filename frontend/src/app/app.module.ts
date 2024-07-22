// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AdminAboutComponent } from './components/admin-about/admin-about.component';
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AboutPageComponent } from './components/about-page/about-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    SignUpComponent,
    LoginComponent,
    AdminDashboardComponent,
    AdminProfileComponent,
    AdminAboutComponent,
    AdminSettingsComponent,
    ChangePasswordComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule // Add the Material module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
