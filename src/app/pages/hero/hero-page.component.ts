import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html'
})
export class HeroPageComponent {
  name = signal('Ironman')
  age =  signal(45)

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`
    return description
  })

  capitalized = computed(() => this.name().toUpperCase())

  changeHero() {
    this.name.set('Spiderman')
    this.age.set(22)
  }

  resetForm() {
    this.name.set('Ironman')
    this.age.set(45)
  }

  changeAge() {
    this.age.set(60)
  }
}