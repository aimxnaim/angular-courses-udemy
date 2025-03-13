import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TaskUserComponent } from "./task-user/task-user.component";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NewTaskComponent } from "./task-user/new-task/new-task.component";
import { TaskComponent } from "./task-user/task/task.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        TaskUserComponent,
        NewTaskComponent,
        TaskComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule{

}