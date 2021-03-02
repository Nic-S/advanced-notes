import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-footer',
  templateUrl: './note-footer.component.html',
  styleUrls: ['./note-footer.component.scss'],
})
export class NoteFooterComponent implements OnInit {
  public message = new FormControl('', [Validators.required]);
  @Output() publish = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onPublish() {
    if (this.message.valid) {
      this.publish.emit(this.message.value.replace(' ', '\n'));
      this.message.setValue('');
    }
  }

  onEnter(event: Event) {
    this.onPublish();
    event.preventDefault();
  }
}
