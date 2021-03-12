import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { DemoMaterialModule } from './material-module';


@NgModule({
  declarations: [NavigationComponent],
  imports: [DemoMaterialModule],
  exports: [NavigationComponent, DemoMaterialModule]
})
export class SharedModule { }
