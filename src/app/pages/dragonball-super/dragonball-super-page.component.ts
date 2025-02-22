import { DragonballFormComponent } from './../../components/dragonball/dragonball-form/dragonball-form.component';
import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, DragonballFormComponent],
})
export class DragonballSuperPageComponent {
  // constructor(public dragonballService: DragonballService) {} // old way

  public dragonballService = inject(DragonballService); // new way
}
