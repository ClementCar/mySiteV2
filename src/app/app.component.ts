import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' ,
  styles: []
})
export class AppComponent {
  active = 1;
  title = 'mySiteV2';

  constructor(private offCanvasService: NgbOffcanvas,
    private modalService: NgbModal) {

  }

  open(content: any) {
    this.offCanvasService.open(content, {position: 'bottom'})
  }

  openModal(content: any) {
    this.modalService.open(content)
  }
}
