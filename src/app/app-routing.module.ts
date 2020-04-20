import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyForScreenDirective } from './onlyForScreen.directive';


const routes: Routes = [];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
   ]
})
export class AppRoutingModule { }
