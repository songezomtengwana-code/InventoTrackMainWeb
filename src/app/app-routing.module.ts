import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './views/features/features.component';
import { HelpComponent } from './views/help/help.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';

const routes: Routes = [
  { path: '',  component: WelcomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'help', component: HelpComponent },
  {path: 'create-account', component: CreateAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
