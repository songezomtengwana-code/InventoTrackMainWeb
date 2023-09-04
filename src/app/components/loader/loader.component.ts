import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() text: string = ''
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
