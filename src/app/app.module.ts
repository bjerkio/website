import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BjerkDesignModule } from './bjerk-design/bjerk-design.module';
import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, Apollo} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { PageHomeComponent } from './page-home/page-home.component';
import { LinkCardComponent } from './ui-elements/link-card/link-card.component';
import { PersonAvatarComponent } from './ui-elements/person-avatar/person-avatar.component';
import { UserService } from './servicies/user/user.service';
import { ContentMarcetingService } from './servicies/content-marketing/content-marketing.service';
import { FooterComponent } from './ui-elements/footer/footer.component';
import { PageContractComponent } from './page-contract/page-contract.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageTeamComponent } from './page-team/page-team.component';
import { EmployeCardComponent } from './ui-elements/employe-card/employe-card.component';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { PrinciplesPageComponent } from './principles-page/principles-page.component';
import { PageCompetenciesComponent } from './page-competencies/page-competencies.component';
import { HeroComponent } from './ui-elements/hero/hero.component';
import { BigBComponent } from './svg-images/big-b/big-b.component';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { PageStructureComponent } from './page-structure/page-structure.component';
import { PartnersService } from './servicies/partners/partners.service';
import { BjerkyBjerkComponent } from './svg-images/bjerky-bjerk/bjerky-bjerk.component';
import { BjerkDogComponent } from './svg-images/bjerk-dog/bjerk-dog.component';
import { GraphComponent } from './svg-images/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    LinkCardComponent,
    PersonAvatarComponent,
    FooterComponent,
    PageContractComponent,
    PageBlogComponent,
    PrinciplesPageComponent,
    PageCompetenciesComponent,
    HeroComponent,
    PageTeamComponent,
    EmployeCardComponent,
    PageBlogComponent,
    PageStructureComponent,
    BigBComponent,
    BjerkyBjerkComponent,
    BjerkDogComponent,
    GraphComponent
  ],
  imports: [
  BrowserModule,
    LazyLoadImagesModule,
    BjerkDesignModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    UserService,
    ContentMarcetingService,
    PartnersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      // By default, this client will send queries to the
      // `/graphql` endpoint on the same host
      link: httpLink.create({uri: 'https://api.graphcms.com/simple/v1/cjibv9pdv7rj60134ksj8mbrn'}),
      cache: new InMemoryCache(),
    });
  }
}
