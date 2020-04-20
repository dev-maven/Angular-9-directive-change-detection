import { Directive, OnInit, Input, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { ResponsiveService } from './responsive.service';

@Directive({
  selector: '[onlyForScreen]'
})

export class OnlyForScreenDirective {

  constructor(
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }
@Input() set onlyForScreen(condition: boolean) {
  console.log(condition);
  if (condition) {
    this.viewContainer.createEmbeddedView(this.templateRef);
  } else {
    this.viewContainer.clear();
  }
}
  // ngOnInit() {
  //   this.responsiveService.size$.subscribe(result => {
  //     console.log(result);
  //     if (result === 'desktop') {
  //       this.desktop = true;
  //     } else if (result === 'tablet') {
  //       this.tablet = true;
  //     } else if (result === 'mobile') {
  //       this.mobile = true;
  //     }
  //   });
  // }
}
