import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-note-box',
  templateUrl: './new-note-box.component.html',
  styleUrls: ['./new-note-box.component.scss']
})
export class NewNoteBoxComponent implements OnInit {

  @Output() publish = new EventEmitter<string>()
  public message: string = '';

  constructor() {
  }

  ngOnInit(): void {

  }

  onPublish() {
    if(this.message) {
      this.publish.emit(this.message);
      this.message = ''
    }
  }

  onInput(event: Event) {
    const divEl = event.target as HTMLDivElement
    this.message = divEl.textContent || ''
  }
}
