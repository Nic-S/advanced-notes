import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import {HttpClientModule} from "@angular/common/http";
import { NoteMessageComponent } from './components/note-message/note-message.component';
import { InNoteComponent } from './components/in-note/in-note.component';
import { NoteHeaderComponent } from './components/note-header/note-header.component';
import { OutNoteComponent } from './components/out-note/out-note.component';
import {ShortNamePipe} from "./utils/ShortNamePipe";
import {NewNoteBoxComponent} from "./components/new-note-box/new-note-box.component";
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    NotesContainerComponent,
    NoteMessageComponent,
    InNoteComponent,
    NoteHeaderComponent,
    OutNoteComponent,
    ShortNamePipe,
    NewNoteBoxComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
