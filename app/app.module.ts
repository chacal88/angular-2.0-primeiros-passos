import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AppCompoment, TaskEditComponent} from "./app.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations: [AppCompoment, TaskEditComponent],
    bootstrap:[AppCompoment]
})

export class AppModule{

}