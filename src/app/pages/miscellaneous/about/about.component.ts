import { Component, OnInit } from '@angular/core'
import { ProjectConfiguration } from '@config/configuration'

@Component({
  selector: 'pds-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public aboutTitle = ProjectConfiguration.app.aboutTitle
  public aboutDescription = ProjectConfiguration.app.aboutDescription

  constructor() {}

  ngOnInit(): void {}
}
