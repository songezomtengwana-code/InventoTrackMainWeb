import { Component } from '@angular/core';

interface authenticationOptions {
  name: string,
  url: string
  icon : string
}

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  authOptions: authenticationOptions[] = [
    {
      name: "Goolge",
      url: 'https://google.com',
      icon : 'bi bi-goolge'
    },
    {
      name: "Microsoft",
      url: 'https://google.com',
      icon : 'bi bi-micorsoft'
    }
  ]

}
