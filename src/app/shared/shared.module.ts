import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent, InputComponent, TodoComponent, SoftkeyComponent, HomeComponent
} from './components';

const allComponents = [
  HeaderComponent,
  InputComponent,
  TodoComponent,
  HomeComponent,
  SoftkeyComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: allComponents,
  exports: allComponents
})

export class SharedModule { }
