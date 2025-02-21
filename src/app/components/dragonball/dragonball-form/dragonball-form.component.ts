import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'dragonball-form',
  imports: [],
  templateUrl: './dragonball-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballFormComponent {
  name = signal('');
  power = signal(0);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    console.log({
      name: this.name(),
      power: this.power(),
    });
    // this.characters.update((current) => [
    //   ...current,
    //   { id: current.length, name: this.name(), power: this.power() },
    // ]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
