import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() public url: string;
  @Input() public alt: string = 'avatar image'

  constructor() { }

  ngOnInit(): void {
  }

}
