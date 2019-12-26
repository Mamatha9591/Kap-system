import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MasalaMangerComponent } from './masala-manger/masala-manger.component';
import { InformationTechComponent } from './information-tech/information-tech.component';
import { AmtekComponent } from './amtek/amtek.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CompanyInfoComponent,
    MasalaMangerComponent,
    InformationTechComponent,
    AmtekComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
