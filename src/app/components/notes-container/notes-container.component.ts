import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note, NOTE_TYPES } from '../../model/note';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit {
  @ViewChild('scrollContainer') public scrollContainer: ElementRef<HTMLDivElement>;
  public notes$: Observable<Note[]>;
  public noteTypes = NOTE_TYPES;

  constructor(private noteService: NoteService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.notes$ = this.noteService.getNotes();
  }

  handlePublish(message: string) {
    this.noteService.setUserNote({ message, date: new Date().toISOString() });
    this.scrollBottom();
  }

  scrollBottom() {
    this.renderer.setProperty(
      this.scrollContainer.nativeElement,
      'scrollTop',
      this.scrollContainer.nativeElement.scrollHeight
    );
  }
}
