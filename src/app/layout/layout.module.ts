import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { CanDeactivateGuard } from './can-deactivate/can-deactivate.guard';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MultiselectComponent } from './multiselect/multiselect.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    LoginComponent,
    UserFormComponent,
    SearchComponent,
    MultiselectComponent
  ],
  providers: [CanDeactivateGuard],
  declarations: [LoginComponent, HomePageComponent, UserFormComponent, SearchComponent, MultiselectComponent]
})
export class LayoutModule { }
