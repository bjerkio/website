import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageContractComponent } from './page-contract/page-contract.component';
import { PageTeamComponent } from './page-team/page-team.component';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { PrinciplesPageComponent } from './principles-page/principles-page.component';
import { PageCompetenciesComponent } from './page-competencies/page-competencies.component';
import { PageStructureComponent } from './page-structure/page-structure.component';
import { PageRecruitComponent } from './page-recruit/page-recruit.component';

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
    path: 'recruit',
    component: PageRecruitComponent
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
  {
    path: 'structure',
    component: PageStructureComponent
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
