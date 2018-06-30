import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageCompetenciesComponent } from './page-competencies/page-competencies.component';

export const routes: Routes = [
  {path: '', component: PageHomeComponent, children:
    [
      {path: '', component: PageHomeComponent}
    ]
  },
  {
    path: 'competencies',
    component: PageCompetenciesComponent
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
