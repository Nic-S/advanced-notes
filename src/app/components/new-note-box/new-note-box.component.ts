import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-new-note-box',
  templateUrl: './new-note-box.component.html',
  styleUrls: ['./new-note-box.component.scss']
})
export class NewNoteBoxComponent implements OnInit {

  @ViewChild('input') inputRef:ElementRef;
  @Output() publish = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit(): void {

  }

  onPublish() {
    const message = this.inputRef.nativeElement.textContent
    if(message) {
      this.publish.emit(message);
      this.inputRef.nativeElement.textContent = ''
    }
  }
}
