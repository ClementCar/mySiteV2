import { Injectable } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../projects-list';
import { of, Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getAllProjects(): Observable<Project[]>{
    return of(PROJECTS).pipe(delay(1500)) ;
  }

  getProject(id: string): Observable<Project> {
    return of(PROJECTS.filter((project) => (project.id === id))[0]).pipe(delay(1500));
  }

  getProjectIds(): Observable<string[] | any>  {
    return of(PROJECTS.map(project => project.id)).pipe(delay(1500));
  }

}
