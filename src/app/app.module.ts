import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task1Component } from './task1/task1.component';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { Task2Component } from './task2/task2.component';
import { PipetestComponent } from './pipetest/pipetest.component';
import { AppendPipe } from './pipes/append.pipe';
import { AppendCLIPipe } from './pipetest/append-cli.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { ServicesExampleComponent } from './services-example/services-example.component';
import { PostService } from './Services/post.service';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveForm1Component } from './reactive-form1/reactive-form1.component';
import { noSpace } from './Validators/nospace.validators';


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
    PipetestComponent,
    AppendPipe,
    AppendCLIPipe,
    SummaryPipe,
    ServicesExampleComponent,
    TdfComponent,
    ReactiveformComponent,
    ReactiveForm1Component,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
