import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { TaskUserModule } from "./task-user/task-user.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        SharedModule,
        TaskUserModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule{

}