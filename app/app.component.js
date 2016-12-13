"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var TASKS = [
    { id: 1, name: "Trabalhar 1" },
    { id: 2, name: "Trabalhar 2" },
    { id: 3, name: "Trabalhar 3" },
    { id: 4, name: "Trabalhar 4" },
    { id: 5, name: "Trabalhar 5" },
    { id: 6, name: "Trabalhar 6" },
    { id: 7, name: "Trabalhar 7" },
    { id: 8, name: "Trabalhar 8" },
    { id: 9, name: "Trabalhar 9" },
    { id: 10, name: "Trabalhar 10" },
];
var Task = (function () {
    function Task() {
    }
    return Task;
}());
var TaskEditComponent = (function () {
    function TaskEditComponent() {
    }
    TaskEditComponent.prototype.onkeyPress = function (event) {
        console.log("Key Press..", event.key);
    };
    return TaskEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Task)
], TaskEditComponent.prototype, "task", void 0);
TaskEditComponent = __decorate([
    core_1.Component({
        selector: 'task-edit',
        template: "\n    <div *ngIf=\"task\">\n        <input type=\"text\" [(ngModel)]=\"task.name\" (keypress)=\"onkeyPress($event)\">\n    </div>\n    \n    "
    }),
    __metadata("design:paramtypes", [])
], TaskEditComponent);
exports.TaskEditComponent = TaskEditComponent;
var AppCompoment = (function () {
    function AppCompoment() {
        this.title = "Lista de Tarefas";
        this.tasks = TASKS;
    }
    AppCompoment.prototype.onClick = function (task) {
        console.log("hello word", task);
        this.selectedTask = task;
    };
    ;
    return AppCompoment;
}());
AppCompoment = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <ul>\n        <li *ngFor=\"let task of tasks\" (click)=\"onClick(task,$event)\">\n            {{task.id}} - {{task.name}}\n        </li>\n    </ul>\n    <task-edit [(task)]=\"selectedTask\"></task-edit>\n    \n    "
    }),
    __metadata("design:paramtypes", [])
], AppCompoment);
exports.AppCompoment = AppCompoment;
//# sourceMappingURL=app.component.js.map