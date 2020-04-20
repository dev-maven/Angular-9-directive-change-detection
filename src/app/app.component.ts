import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsiveService } from './responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'payever-task';
  desktop = true;
  mobile = false;
  tablet = false;

  public size$: Observable<string>;
  constructor(private responsiveService: ResponsiveService) {
    this.size$ = this.responsiveService.size$;

    this.size$.subscribe(result => {
      console.log(result);
      // console.log(this.mobile);
      // console.log(this.tablet);
      // console.log(this.desktop);


      if (result === 'desktop') {
        this.desktop = true;
        this.mobile = false;
        this.tablet = false;
      } else if (result === 'tablet') {
        this.tablet = true;
        this.desktop = false;
        this.mobile = false;
      } else if (result === 'mobile') {
        this.mobile = true;
        this.desktop = false;
        this.tablet = false;
      }
    });
  }
}
