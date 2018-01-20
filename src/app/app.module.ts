import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// import component
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { EventsComponent } from './components/events/events.component';
import { FormEventsComponent } from './components/form-events/form-events.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserComponent } from './components/user/user.component';

// import services
import { TodoDataService } from './services/todo-data.service';
import { UserDataService } from './services/user-data.service';


@NgModule({
  declarations: [   // компоненты
    AppComponent,
    TestComponent,
    EventsComponent,
    FormEventsComponent,
    TodoComponent,
    UserComponent
  ],
  imports: [        // модули
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [      // сервисы
    TodoDataService,
    UserDataService
  ],
  bootstrap: [AppComponent] // компонент, с которого начинается начальная загрузка
})
export class AppModule { }
