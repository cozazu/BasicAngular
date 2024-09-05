import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import DashboardComponent from "../../dashboard/dashboard.component";

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  template: `
    <section [ngClass]="['w-full', cssClass]">
      <ng-content />
    </section>
  `,
})
export class HeavyLoadersFastComponent {

  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log("Heavy Loader Fast made");
  }
}
