import { Component } from '@angular/core';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgsRevealService } from 'ngx-scrollreveal';
import { NgsRevealConfig } from 'ngx-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' ,
  styles: [],
  providers: [NgsRevealConfig]
})
export class AppComponent {
  title = 'mySiteV2';
  beforeRevealSubscription: any;
  afterRevealSubscription: any;
  beforeResetSubscription: any;
  afterResetSubscription: any;

  constructor(
    private offCanvasService: NgbOffcanvas,
    private modalService: NgbModal,
    config: NgsRevealConfig,
    private revealService: NgsRevealService
  ) {
    // config.duration = 5000;
    // config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)'
  }

  open(content: any) {
    this.offCanvasService.open(content, {position: 'bottom'})
  }

  openModal(content: any) {
    this.modalService.open(content)
  }
}
