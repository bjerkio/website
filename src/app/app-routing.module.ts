import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageContractComponent } from './page-contract/page-contract.component';

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
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
