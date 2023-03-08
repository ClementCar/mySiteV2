import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styles: ['.custom-img {width: auto; height: auto; height: 60vh; max-width: 100%;}'
  ]
})
export class PortfolioDetailComponent implements OnInit {
  @Input() project!: Project;

  constructor() { }

  ngOnInit(): void {
  }

}
