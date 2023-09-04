import { Component } from '@angular/core';

interface feature {
  date: string,
  title: string,
  body: string,
  updates: any,
  new: true,
  key: string
}

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent {
  features:feature[] = [
    {
      date: '2023 07 19',
      title: 'Scan To Find',
      body: 'New scan to find feature to make looking for a store product much easier...',
      updates: [
        'multi-store management'
      ],
      new: true,
      key: '5f9d4f54f-f54038d0h-5ufb93f4'
    },
    {
      date: '2023 07 02',
      title: 'Mutli Store Integration',
      body: 'lorem ipsum dolor',
      updates: [
        'multi-store management'
      ],
      new: true,
      key: '5f9d4f54f-f54038d0h-3rriof4eo'
    }
  ]
}
