import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../model/note';

@Component({
  selector: 'app-in-note',
  templateUrl: './in-note.component.html',
  styleUrls: ['./in-note.component.scss'],
})
export class InNoteComponent implements OnInit {
  @Input() public note: Note;

  constructor() {}

  ngOnInit(): void {}
}
