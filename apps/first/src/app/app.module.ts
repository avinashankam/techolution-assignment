import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { SecondSharedModule } from '../../../second/src/app/app.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { OtherProjectComponent } from './other-project/other-project.component';
import { HeaderModule } from '../../../../libs/header/src/lib/header.module';
import { UiLibraryModule } from './ui-library/ui-library.module';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomeComponent,
    LibraryComponent,
    OtherProjectComponent,
  ],
  imports: [
    BrowserModule,
    SecondSharedModule.forRoot(''),
    AppRoutingModule,
    SharedModule,
    HeaderModule,
    UiLibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
