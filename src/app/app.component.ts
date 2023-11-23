import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, HeaderComponent, TaskListComponent, AddTaskComponent, FormsModule, FooterComponent, RouterLink]
})
export class AppComponent {
  title = 'angular-crash';
}
