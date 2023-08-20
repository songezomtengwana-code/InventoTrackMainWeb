import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  title = 'InventoTrack';
  subtitle = 'ZOFS';
  navigationProps: any = [
    {
      key: 'Founder & CEO',
      value: 'Songezo Mtengwana',
    },
    {
      key: 'www.inventotrack.web.app',
      value: 'InventoTrack',
    },
  ];

  features: any = [
    {
      key: 'Alerts',
      value: 'Get notified every time there is a relevant unread update.',
      color: 'amber',
    },
    {
      key: 'Dashboard',
      value:
        'Showcase recent purchases in the shopping module and the latest comments in social.',
      color: 'limegreen',
    },
    {
      key: 'Manger and Accounts',
      value:
        'Allow users to browse through the app and check out its features before signing up for a paid account. ',
      color: 'red',
    },
  ];
}
