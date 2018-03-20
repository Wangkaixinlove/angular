import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { AComponent } from './components/a/a.component';
import { InputComponent } from './components/input/input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { GetdataService} from './services/getdata.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    AComponent,
    InputComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
