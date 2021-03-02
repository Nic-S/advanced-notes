import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-note-message',
  templateUrl: './note-message.component.html',
  styleUrls: ['./note-message.component.scss'],
})
export class NoteMessageComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() public message: string;

  @ViewChild('messageBox') public messageBox: ElementRef;
  public isReadMoreVisibleSubscription: Subscription;
  public expanded: boolean = false;
  public isReadMoreVisible: boolean;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.isReadMoreVisibleSubscription = fromEvent(window, 'resize')
      .pipe(map(e => this.isMultiLineOverflows()))
      .subscribe(isMultiLineOverflows => (this.isReadMoreVisible = isMultiLineOverflows));
  }

  ngAfterViewInit(): void {
    this.isReadMoreVisible = this.isMultiLineOverflows();
    this.changeDetectorRef.detectChanges();
  }
  ngOnDestroy(): void {
    this.isReadMoreVisibleSubscription.unsubscribe();
  }

  isMultiLineOverflows() {
    const el = this.messageBox != null ? this.messageBox.nativeElement : {};
    return el.scrollHeight > el.clientHeight;
  }

  onReadMore() {
    this.expanded = true;
  }
}
