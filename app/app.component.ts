import {Component, Input} from '@angular/core';

let TASKS:Task[] = [
    {id: 1,name:"Trabalhar 1"},
    {id: 2,name:"Trabalhar 2"},
    {id: 3,name:"Trabalhar 3"},
    {id: 4,name:"Trabalhar 4"},
    {id: 5,name:"Trabalhar 5"},
    {id: 6,name:"Trabalhar 6"},
    {id: 7,name:"Trabalhar 7"},
    {id: 8,name:"Trabalhar 8"},
    {id: 9,name:"Trabalhar 9"},
    {id: 10,name:"Trabalhar 10"},
];

class Task {
    id:number;
    name:string;
}

@Component({
    selector:'task-edit',
    template:`
    <div *ngIf="task">
        <input type="text" [(ngModel)]="task.name" (keypress)="onkeyPress($event)">
    </div>
    
    `
})

export class TaskEditComponent{
    @Input()
    task:Task;

    onkeyPress(event){
        console.log("Key Press..",event.key);
    }

}


@Component({
    selector:'my-app',
    template:`
    <h1>{{title}}</h1>
    <ul>
        <li *ngFor="let task of tasks" (click)="onClick(task,$event)">
            {{task.id}} - {{task.name}}
        </li>
    </ul>
    <task-edit [(task)]="selectedTask"></task-edit>
    
    `
})

export class AppCompoment{

    title:string = "Lista de Tarefas";
    tasks:Task[] = TASKS;
    selectedTask:Task;

    onClick(task){
        console.log("hello word",task);
        this.selectedTask = task;
    };

}