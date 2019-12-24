import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: "about", component: AboutComponent},
  { path: "contact", component: AboutComponent},
  { path: "contacts", component: AboutComponent},
  { path: "login", component: LoginComponent},
  { path: "main", component: MainComponent},
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MainComponent,
    AboutComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    // RouterModule.forRoot(
    //   appRoutes
    // ),
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
