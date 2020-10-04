import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ViewdataComponent } from './viewdata/viewdata.component';  
import { FormfieldsComponent } from './formfields/formfields.component';  
import { TemplateFormComponent } from './template-form/template-form.component';  
const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'browse-data', component:ViewdataComponent},
  {path: 'formsfield', component:FormfieldsComponent},
  {path: 'template-form', component:TemplateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
