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
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { LoaderComponent } from './components/loader/loader.component';

// firebase
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCBj2lRQJi4DW344SvnvdisOQu41o-oERg',
  authDomain: 'inventotrack-a8be4.firebaseapp.com',
  projectId: 'inventotrack-a8be4',
  storageBucket: 'inventotrack-a8be4.appspot.com',
  messagingSenderId: '295911770194',
  appId: '1:295911770194:web:a72047af48e5d2ce1d778b',
  measurementId: 'G-Q1450FR9KM',
};  

@NgModule({
  declarations: [
    AppComponent,
    AboutCardComponent,
    HelpComponent,
    FeaturesComponent,
    WelcomeComponent,
    HeaderComponent,
    FeatureCardComponent,
    NavigationComponent,
    CreateAccountComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
