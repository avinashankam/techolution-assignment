import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { OtherProjectComponent } from './other-project/other-project.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'other', component: OtherProjectComponent },
  //{ path: '**', redirectTo: ''},
  {
    path: 's',
    loadChildren: () => import('apps/second/src/app/app.module').then(m => m.SecondSharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }