import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidePageRoutingModule } from './slide-routing.module';

import { SlidePage } from './slide.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidePageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [SlidePage]
})
export class SlidePageModule {}
