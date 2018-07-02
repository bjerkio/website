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
import { PageBlogComponent } from './page-blog/page-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    LinkCardComponent,
    PersonAvatarComponent,
    FooterComponent,
    PageBlogComponent
  ],
  imports: [
    BrowserModule,
    BjerkDesignModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    UserService,
    ContentMarcetingService
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
