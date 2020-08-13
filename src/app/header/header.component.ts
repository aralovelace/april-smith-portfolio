import {Component, Inject} from '@angular/core';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  title = 'April Smith';
  role = 'Full Stack Developer';

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

   scroll(href): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#' + href,
    });
  }

}
