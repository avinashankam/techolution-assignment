import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'first-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router){}
  navigate(url : string) : void {
    this.router.navigateByUrl(url);
  }
}
