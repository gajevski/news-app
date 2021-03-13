import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { DemoMaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [NavigationComponent, CardComponent],
  imports: [DemoMaterialModule, FlexLayoutModule, CommonModule],
  exports: [NavigationComponent, DemoMaterialModule, FlexLayoutModule, CardComponent]
})
export class SharedModule { }
