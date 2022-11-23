import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'first-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigate(): void {
    this.router.navigateByUrl('/s')
  }
}
