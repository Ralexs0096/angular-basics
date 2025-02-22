import { Injectable, signal } from '@angular/core';
import { Characters as Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8000,
    },
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update((current) => [...current, newCharacter]);
  }
}
