import { Component } from '@angular/core';

@Component({
  selector: 'first-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent {
  titles: any[]= ["Name", "Age", "country"]
  data: any[]= [
    {name: 'Avinash', age: 27, country: "India"},
    {name: 'Vinay', age: 26, country: "America"},
    {name: 'Santhu', age: 25, country: "Ukraine"},
    {name: 'Gangadhar', age: 37, country: "Australia"},
    {name: 'Roja', age: 24, country: "China"},
    {name: 'Bunny', age: 17, country: "Russia"},
    {name: 'Sunny', age: 17, country: "Andaman"},
    {name: 'Siva', age: 47, country: "India"}
  ]
}
