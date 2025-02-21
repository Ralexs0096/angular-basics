import { DragonballFormComponent } from './../../components/dragonball/dragonball-form/dragonball-form.component';
import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { Characters as Character } from '../../interfaces/character.interface';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, DragonballFormComponent],
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

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
