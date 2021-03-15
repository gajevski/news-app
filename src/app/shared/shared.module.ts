import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { DemoMaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './card/card.component';
import { CommentComponent } from './comment/comment.component';
@NgModule({
  declarations: [NavigationComponent, CardComponent, CommentComponent],
  imports: [DemoMaterialModule, FlexLayoutModule, CommonModule],
  exports: [NavigationComponent, DemoMaterialModule, FlexLayoutModule, CardComponent, CommentComponent]
})
export class SharedModule { }
