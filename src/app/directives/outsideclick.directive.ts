import { Directive, ElementRef, Renderer, HostListener, Output, EventEmitter } from '@angular/core';
@Directive({
    selector: '[clickOutside]'
})
export class OutsideClickDirective {
  @Output() public clickOutside = new EventEmitter();
    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    @HostListener('document:click', ['$event'])
  clickout(event) {
    let target = this.el.nativeElement.contains(event.target)
    if(!target) {
      this.clickOutside.emit(null);
    }
  }
}
