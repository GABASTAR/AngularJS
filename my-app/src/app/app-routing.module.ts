import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './route/home/home.component';
import { AboutComponent } from './route/about/about.component';
import { NotFoundComponent } from './route/not-found/not-found.component';
import { ItemComponent } from './route/item/item.component';
import { DetailsComponent } from './route/item/details/details.component';
import { StatsComponent } from './route/item/stats/stats.component';


const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: "item/:id", component: ItemComponent, children:[{path: "details", component:  DetailsComponent}, {path: "stats", component:  StatsComponent}]},
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
