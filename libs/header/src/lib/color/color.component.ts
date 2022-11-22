import { Component, Input } from '@angular/core';

@Component({
  selector: 'first-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent {
  @Input() data: any[]= [];
  @Input() titles: any[]= [];
}
