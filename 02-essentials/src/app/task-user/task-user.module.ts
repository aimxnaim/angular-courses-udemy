import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskUserComponent } from "./task-user.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        TaskUserComponent,
        NewTaskComponent,
        TaskComponent
    ],
    exports: [TaskUserComponent],
    imports: [SharedModule, FormsModule, CommonModule]
})

export class TaskUserModule {}