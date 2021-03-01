import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() public url: string;
  @Input() public alt: string = 'avatar image'
  public error = false;

  constructor() { }

  ngOnInit(): void {
    this.error = false;
  }

  onError = (img: any) => {
    this.error = true;
  }

}
