import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  public enable: boolean = false;
  constructor() { }

  ngOnInit() {
    if (sessionStorage.getItem('username') == 'true') {
      this.enable = true;
    }
  }

}
