import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsiveService } from './responsive.service';
import { OnlyForScreenDirective } from './onlyForScreen.directive';

@NgModule({
  declarations: [
    AppComponent,
    OnlyForScreenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [OnlyForScreenDirective],
  providers: [ResponsiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
