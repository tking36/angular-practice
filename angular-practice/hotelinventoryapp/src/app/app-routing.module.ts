import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent },
  {path:'login', component: LoginComponent},
  {path:'', redirectTo: '/rooms', pathMatch: 'full'},
  {path:'**', component: NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
