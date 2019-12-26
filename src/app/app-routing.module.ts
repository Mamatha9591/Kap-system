import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { MasalaMangerComponent } from './masala-manger/masala-manger.component';
import { InformationTechComponent } from './information-tech/information-tech.component';
import { AmtekComponent } from './amtek/amtek.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'company', component: CompanyInfoComponent },
  {path:'masala-manger',component:MasalaMangerComponent},
  {path:'information-tech',component:InformationTechComponent},
  {path:'amtek',component:AmtekComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
