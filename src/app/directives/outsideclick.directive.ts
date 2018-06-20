import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
@Directive({
    selector: '[clickOutside]'
})
export class OutsideClickDirective {
  @Output() public clickOutside = new EventEmitter();
    constructor(private el: ElementRef) {
    }

    @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.el.nativeElement.contains(event.target)) {
      event.stopPropagation();
      this.clickOutside.emit(true);
    }
  }
}
