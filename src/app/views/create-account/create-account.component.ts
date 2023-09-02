import { Component, Input, OnInit } from '@angular/core';

interface authenticationOptions {
  name: string;
  url: string;
  icon: string;
}

class userAccountModel {
  name!: string
  email!: string
  password!:string
}

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  authOptions: authenticationOptions[] = [
    {
      name: 'Goolge',
      url: 'https://google.com',
      icon: 'bi bi-goolge',
    },
    {
      name: 'Microsoft',
      url: 'https://google.com',
      icon: 'bi bi-micorsoft',
    },
  ];

  handleUserAccountCreation() {
    
  }
}
