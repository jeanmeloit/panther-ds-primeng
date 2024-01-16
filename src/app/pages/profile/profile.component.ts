import { AsyncPipe, DatePipe, NgIf } from '@angular/common'
import { Component } from '@angular/core'
import { CommonsModule } from '@commons/commons.module'
import { Observable } from 'rxjs'

import { User } from './../../auth/interfaces/user.interface'
import { LoginService } from './../../auth/services/login.service'

@Component({
  selector: 'pds-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [NgIf, AsyncPipe, DatePipe, CommonsModule],
})
export class ProfileComponent {
  public profileImageUrl = 'assets/images/alan.png'
  public readonly user$: Observable<User>

  constructor(private loginService: LoginService) {
    this.user$ = this.loginService.currentUser
  }

  public onFileSelected(event: any) {
    const file = event.target.files[0]
    // Process the selected image file (e.g., preview, upload to server)
  }
}
