import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { bottom } from '@popperjs/core';
import { Project } from '../project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  // styles: ['.custom-card{height: 60vh} .card-img{height: 30vh}']
})
export class PortfolioComponent implements OnInit {
  projects!: Project[];

  constructor(
    private offCanvas: NgbOffcanvas,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projectService.getAllProjects()
    .subscribe((projects) => this.projects = projects)
  }

  openCanvas(content: any) {
    this.offCanvas.open(content, {position: bottom, panelClass: "h-100"})
  }

}
