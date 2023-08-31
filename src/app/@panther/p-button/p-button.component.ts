import { NgClass, NgIf } from '@angular/common'
import { Component, Input } from '@angular/core'
import { ButtonModule } from 'primeng/button'

const SIZES = {
  small: 'p-button-sm',
  medium: 'p-button',
  large: 'p-button-lg',
}

@Component({
  selector: 'pds-p-button',
  standalone: true,
  imports: [NgIf, NgClass, ButtonModule],
  template: `
    <p-button
      [type]="type"
      [style]="style"
      [badge]="badge"
      [badgeClass]="badgeClass"
      [disabled]="disabled"
      [loading]="loading"
      loadingIcon="{{ loadingIcon }} pi-spin"
      styleClass="{{ sizesClasses[size] }} {{ class }}"
    >
      <ng-container *ngIf="!custom" class="mr-3">
        <i
          *ngIf="icon && iconPosition === 'left'"
          class="{{ icon }} p-button-icon"
          [ngClass]="{ 'mr-2': text }"
        >
        </i>

        <span>
          <b>{{ text }}</b>
        </span>

        <i
          *ngIf="icon && iconPosition === 'right'"
          class="{{ icon }} p-button-icon"
          [ngClass]="{ 'ml-2': text }"
        >
        </i>
      </ng-container>

      <ng-content *ngIf="custom"></ng-content>
    </p-button>
  `,
  styleUrls: ['./p-button.component.scss'],
})
export class PButtonComponent {
  @Input() public custom = false
  @Input() public disabled = false
  @Input() public loading = false
  @Input() public loadingIcon = 'pi pi-spinner'
  @Input() public style: Object
  @Input() public type = 'button'
  @Input() public class: string
  @Input() public text: string
  @Input() public badge: string
  @Input() public badgeClass: string
  @Input() public icon: string
  @Input() public iconPosition: 'left' | 'right' = 'left'
  @Input() public size: 'small' | 'medium' | 'large' = 'small'

  public sizesClasses = SIZES
}
