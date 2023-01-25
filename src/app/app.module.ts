import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskModule } from './features/task/task.module';
import { AppRoutingModule } from './app-routing.module';
import { TaskService } from './shared/task.service';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule
    
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
