import { Component, OnInit } from '@angular/core';

interface aboutModel {
  icon: string,
  title: string,
  body:  string,
  key: number,
}

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent implements OnInit {
  ngOnInit(): void {
  } 

  about: aboutModel[] = [
    {
      body: "The multiple store coverage feature offers registered owner to cover a various stores on one app. ",
      icon: "https://i.ibb.co/Mkq0WFd/wired-outline-18-location-pin.gif",
      key: 2,
      title: "Multiple Store Coverage"
    },
    {
      body: "Multiple Device support. InventoTrack is available for both mobile devices Android & iOS and Web",
      icon: "../../../assets/gifs/desktop-icon.gif",
      key: 0,
      title: "Device-agnostic"
    },
    {
      body: "Fast and easy control over inventory stock for each store at a push of a button for instant changes.",
      icon: "../../../assets/gifs/bar-chart.gif",
      key: 1,
      title: "Inventory Stock Tracking"
    }
  ]
}
