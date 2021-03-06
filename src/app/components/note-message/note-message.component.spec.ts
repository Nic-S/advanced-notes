import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteMessageComponent } from './note-message.component';

describe('MessageComponent', () => {
  let component: NoteMessageComponent;
  let fixture: ComponentFixture<NoteMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteMessageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
