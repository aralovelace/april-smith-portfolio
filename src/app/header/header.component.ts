import {Component, Inject, OnInit} from '@angular/core';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'April Smith';
  role = 'Full Stack Developer';

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
  }

}
