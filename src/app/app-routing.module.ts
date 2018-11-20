import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from './layout/login/login.component';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { CanDeactivateGuard } from './layout/can-deactivate/can-deactivate.guard';
import { UserFormComponent } from './layout/user-form/user-form.component';
import { SearchComponent } from './layout/search/search.component';
import { MultiselectComponent } from './layout/multiselect/multiselect.component';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login', component: LoginComponent
    },
    {
        canActivate: [AuthService],
        path: 'home-page', component: HomePageComponent
    },
    {
        canDeactivate: [CanDeactivateGuard],
        path: 'new', component: UserFormComponent
    },
    {
        path: 'search', component: SearchComponent
    },
    {
        path: 'multiselect', component: MultiselectComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
