import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { HelpComponent } from './views/help/help.component';
import { FeaturesComponent } from './views/features/features.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutCardComponent,
    HelpComponent,
    FeaturesComponent,
    WelcomeComponent,
    HeaderComponent,
    FeatureCardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
