export interface Note {
  name: string;
  lastName: string;
  date: string;
  message: string
  photoUrl: string;
}

export const fromObjectToNote = (o: Record<string, any>): Note => ({name: o.name, lastName: o.lastName, date: o.date, message: o.message, photoUrl: o.photoUrl})
