import { Component, signal } from '@angular/core';

interface Characters {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Characters[]>([
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

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    this.characters.update((current) => [
      ...current,
      { id: current.length, name: this.name(), power: this.power() },
    ]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
