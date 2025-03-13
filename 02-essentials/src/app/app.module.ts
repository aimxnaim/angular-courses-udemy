import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TaskUserComponent } from "./task-user/task-user.component";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HeaderComponent,
        UserComponent,
        CommonModule,
        TaskUserComponent,
        BrowserModule
      ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule{

}