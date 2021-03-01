import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../../model/note";

@Component({
  selector: 'app-out-note',
  templateUrl: './out-note.component.html',
  styleUrls: ['./out-note.component.scss']
})
export class OutNoteComponent implements OnInit {
  @Input() public note: Note;
  constructor() { }

  ngOnInit(): void {
  }

}
