import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { Task1Component } from './task1/task1.component';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { Task2Component } from './task2/task2.component';
import { PipetestComponent } from './pipetest/pipetest.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    PostComponent,
    PostListComponent,
    Task1Component,
    DirectiveTestComponent,
    Task2Component,
    PipetestComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
