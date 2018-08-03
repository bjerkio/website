import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-page-recruit',
  templateUrl: './page-recruit.component.html',
  styleUrls: ['./page-recruit.component.scss']
})
export class PageRecruitComponent implements OnInit {

  url: SafeUrl;

  constructor() {}

  loadScript(url) {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit() {
    this.loadScript('https://bjerkio.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/n507lw/b/9/a44af77267a987a660377e5c46e0fb64/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=no-NO&collectorId=6875b450');
  }

}
