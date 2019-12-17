import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SecondComponent } from '';

const routes: Routes = [
  // { path: "second", component: SecondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
