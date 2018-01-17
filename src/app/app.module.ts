import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { EventsComponent } from './components/events/events.component';
import { FormEventsComponent } from './components/form-events/form-events.component';

@NgModule({
  declarations: [   // компоненты
    AppComponent,
    TestComponent,
    EventsComponent,
    FormEventsComponent
  ],
  imports: [        // модули
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // компонент, с которого начинается начальная загрузка
})
export class AppModule { }
