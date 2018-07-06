import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageContractComponent } from './page-contract/page-contract.component';
import { PageTeamComponent } from './page-team/page-team.component';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { PrinciplesPageComponent } from './principles-page/principles-page.component';
import { PageCompetenciesComponent } from './page-competencies/page-competencies.component';

export const routes: Routes = [
  {path: '', component: PageHomeComponent, children:
    [
      {path: '', component: PageHomeComponent}
    ]
  },
  {
    path: 'contract',
    component: PageContractComponent
  },
  {
    path: 'team',
    component: PageTeamComponent
  },
  {
    path: 'blog/:id',
    component: PageBlogComponent
  },
  {
    path: 'principles',
    component: PrinciplesPageComponent
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
