import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { DemoMaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [NavigationComponent],
  imports: [DemoMaterialModule, FlexLayoutModule],
  exports: [NavigationComponent, DemoMaterialModule, FlexLayoutModule]
})
export class SharedModule { }
