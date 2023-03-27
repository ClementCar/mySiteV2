import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgsRevealModule } from 'ngx-scrollreveal';
import * as fr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { SkillsComponent } from './skills/skills.component';
import { BorderCardDirective } from './border-card.directive';
import { FooterComponent } from './footer/footer.component';
import { ListAppComponent } from './list-app/list-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PresentationComponent } from './presentation/presentation.component';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    PortfolioDetailComponent,
    SkillsComponent,
    BorderCardDirective,
    FooterComponent,
    ListAppComponent,
    PageNotFoundComponent,
    PresentationComponent
  ],
  imports: [
    NgsRevealModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
