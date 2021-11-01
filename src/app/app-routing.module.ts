import { FourOfourComponent } from './components/basic/four-ofour/four-ofour.component';
import { EmployeeComponent } from './components/basic/employee/employee.component';
import { MainComponent } from './components/basic/main/main.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineComponent } from './components/basic/medicine/medicine.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: 'dashboard',
    component: DashboardComponent, canActivate: [AuthGuard]
  },
  { path: 'employee', component: EmployeeComponent },
  { path: 'medicine', component: MedicineComponent },
  { path: '**', component: FourOfourComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
