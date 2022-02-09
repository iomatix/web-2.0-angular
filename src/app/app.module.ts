import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnimalEditorComponent } from './animal-editor/animal-editor.component';
import { NatureComponent } from './nature/nature.component';
import { CalmComponent } from './calm/calm.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    MainComponent,
    AnimalEditorComponent,
    NatureComponent,
    CalmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
