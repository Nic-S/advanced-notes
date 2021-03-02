import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InNoteComponent } from './in-note.component';
import { NoteType } from '../../model/note';

describe('InNoteComponent', () => {
  let component: InNoteComponent;
  let fixture: ComponentFixture<InNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InNoteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InNoteComponent);
    component = fixture.componentInstance;
    const note = {
      id: 5,
      name: 'Oliver',
      lastName: 'Williams',
      date: '2021-02-16T17:32:05Z',
      message:
        'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      photoUrl: 'https://source.unsplash.com/RgoJtqRDuGA',
      type: 'IN' as NoteType,
    };
    component.note = note;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
