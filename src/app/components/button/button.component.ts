import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

type ButtonType = 'flat' | 'primary' | 'secondary'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public look: ButtonType = 'secondary'
  @Output() click = new EventEmitter<MouseEvent>();
  public BUTTON_TYPE = {primary: 'primary', secondary: 'secondary', flat: 'flat'}

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event: MouseEvent) {
    this.click.emit(event);
  }
}
