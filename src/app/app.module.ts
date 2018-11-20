import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { LayoutModule } from './layout/layout.module';
import { LocalStorageModule } from 'angular-2-local-storage';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './layout/can-deactivate/can-deactivate.guard';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: 'user',
      storageType: 'localStorage'
    }),
  ],
  providers: [UserService, AuthService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
