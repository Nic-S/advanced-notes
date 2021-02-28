import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import {HttpClientModule} from "@angular/common/http";
import { NoteMessageComponent } from './components/note-message/note-message.component';
import { InNoteComponent } from './components/in-note/in-note.component';
import { NoteHeaderComponent } from './components/note-header/note-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    NotesContainerComponent,
    NoteMessageComponent,
    InNoteComponent,
    NoteHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
