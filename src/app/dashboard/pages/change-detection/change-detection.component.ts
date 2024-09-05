import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currenFramework()" />

    <pre> {{ frameworkasSignal() | json }} </pre>
    <pre> {{ frameworkAsProperty | json }} </pre>
  `
})
export default class ChangedetectionComponent {

  public currenFramework = computed(
    () => `Change Detection - ${ this.frameworkasSignal().name }`
  )

  public frameworkasSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
    // this.frameworkAsProperty.name = 'React';
      this.frameworkasSignal.update( value => {
        value.name = 'React';

        return {...value};
      });
      console.log("Done")
    }, 3000);
  }
}
