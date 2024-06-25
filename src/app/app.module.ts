import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MedicineComponent } from './components/basic/medicine/medicine.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { FooterComponent } from './components/basic/footer/footer.component';
import { MainComponent } from './components/basic/main/main.component';
import { HeaderComponent } from './components/basic/header/header.component';
import { EmployeeComponent } from './components/basic/employee/employee.component';
import { UpdateMedicineComponent } from './components/basic/update-medicine/update-medicine.component';
import { CartComponent } from './components/basic/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignUpComponent,
    MedicineComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    EmployeeComponent,
    UpdateMedicineComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
