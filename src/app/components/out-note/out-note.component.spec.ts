import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutNoteComponent } from './out-note.component';
import { NoteType } from '../../model/note';

describe('OutNoteComponent', () => {
  let component: OutNoteComponent;
  let fixture: ComponentFixture<OutNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutNoteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutNoteComponent);
    component = fixture.componentInstance;
    // mock the hero supplied by the parent component
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

    // simulate the parent setting the input property with that hero
    component.note = note;

    // trigger initial data binding
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
