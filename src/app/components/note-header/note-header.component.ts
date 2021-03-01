import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-note-header',
  templateUrl: './note-header.component.html',
  styleUrls: ['./note-header.component.scss']
})
export class NoteHeaderComponent implements OnInit {
  @Input() public name: string;
  @Input() public date: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
