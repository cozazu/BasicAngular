import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';


@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './user-list.component.html',
  styles: ``
})
export default class UserListComponent {

  public usersService = inject( UsersService );


}
