import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  tasks: Task[] = [
    { id: 1, title: 'Learn Angular 17', completed: false },
    { id: 2, title: 'Build Taskflow app', completed: false },
  ];

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  addTask() {
    const title = this.taskForm.value.title;
    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    this.tasks.unshift(newTask);
    this.taskForm.reset();
  }
}
