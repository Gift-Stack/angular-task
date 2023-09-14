import { Component, Input } from '@angular/core';
import { Task } from 'src/app/types/task';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;
  expanded = false;
  url = environment.apiURL;
  loading = false;

  ngOnInit() {
    console.log(this.task);
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  async toggleTaskStatus() {
    // try {
    //   this.loading = true;
    //   const payload = {
    //     tasks: {
    //       ...this.task,
    //       completed: !this.task.completed,
    //     },
    //   };
    //   const res = await fetch(`${this.url}/${this.task.id}`, {
    //     method: 'PUT',
    //     body: JSON.stringify(payload),
    //   });
    //   const json = await res.json();
    //   const data = await json;
    //   // this.task = data;
    //   this.loading = false;
    // } catch (error) {
    //   this.loading = false;
    //   console.error('UPDATE_ERROR->', error);
    // }
  }
}
