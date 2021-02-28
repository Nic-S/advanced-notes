import { Component, OnInit } from '@angular/core';
import {NoteService} from "../../services/note.service";
import {Note} from "../../model/note";
import {Observable} from "rxjs";

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {

  public notes$: Observable<Note[]>

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.notes$ = this.noteService.getOthersNotes()
  }

}
