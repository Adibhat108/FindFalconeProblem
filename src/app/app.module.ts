import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToasterComponent } from './toaster/toaster.component';
import { HttpClientModule } from "@angular/common/http";
import { FindFalconeService } from './find-falcone/find-falcone.service';
import { RouterModule } from '@angular/router';
import { FindFalconeComponent } from './find-falcone/find-falcone.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToasterComponent,
    FindFalconeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouterModule.forRoot(routes),
  ],
  providers: [FindFalconeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
