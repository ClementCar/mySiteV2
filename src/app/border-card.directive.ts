import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[borderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#e4e2da';
  private defaultColor: string = '#ffdb58';
  // private defaultHeight : number = 100;

  constructor(private el: ElementRef) {
    // this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('borderCard') borderColor!: string;
  
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#e4e2da');
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
