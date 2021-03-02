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
import {NoteFooterComponent} from "./components/note-footer/note-footer.component";
import { ButtonComponent } from './components/button/button.component';
import { TextareaAutoresizeDirective } from './utils/textarea-autoresize.directive';
import {ReactiveFormsModule} from "@angular/forms";

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
    NoteFooterComponent,
    ButtonComponent,
    TextareaAutoresizeDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
