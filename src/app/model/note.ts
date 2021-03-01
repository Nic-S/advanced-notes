export interface Note {
  name: string;
  lastName: string;
  date: string;
  message: string
  photoUrl: string;
  type: NoteType;
}

export type NoteType = 'IN' | 'OUT'

export const NOTE_TYPES = {in: 'IN', out: 'OUT'} as {in: NoteType, out: NoteType}

export const fromObjectToNote = (o: Record<string, any>): Note => ({name: o.name, lastName: o.lastName, date: o.date, message: o.message, photoUrl: o.photoUrl, type: o.type})

export const fromOutNoteToNote = (o: {message: string, date: string}): Note =>  (
  {name: 'You', lastName: '', date: o.date, message: o.message, photoUrl: "https://source.unsplash.com/Pc0ToyoR5Xo", type: NOTE_TYPES.out}
  )
