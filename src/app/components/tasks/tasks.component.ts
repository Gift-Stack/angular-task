import { Component } from '@angular/core';
import { Task } from 'src/app/types/task';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  url = environment.apiURL;
  tasks: Task[] = [];

  ngOnInit() {
    fetch(this.url)
      .then((res) => res.json())
      .then((data: Task[]) => (this.tasks = data));
  }
}
