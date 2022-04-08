import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/components/login.component';
import { ContactComponent } from './contact/contact.component';
import { TableEmployeesComponent } from './employees/components/table-employees/table-employee.component';
import { EmployeesComponent } from './employees/components/employees.component';
import { AddEmployeesComponent } from './employees/components/add-employees/add-employees.component';

// module
import { AppRoutingModule } from './app.routing.module';

// Bootstrap
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

// service
import { AuthService } from './login/service/auth-service';
import { GlobalServiceParamNavigateService } from './common/service/global-param-navigate-service';
import { DetailEmployeesComponent } from './employees/components/detail-employees/detail-employees.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    TableEmployeesComponent,
    LoginComponent,
    ContactComponent,
    EmployeesComponent,
    AddEmployeesComponent,
    DetailEmployeesComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,
  ],
  providers: [AuthService, GlobalServiceParamNavigateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
