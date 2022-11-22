import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ColorComponent } from './color/color.component';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [HeaderComponent, ColorComponent],
  exports: [HeaderComponent, ColorComponent],
})
export class HeaderModule {}
