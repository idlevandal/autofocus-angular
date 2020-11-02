import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective {

  constructor(private ref: ElementRef) { }

  ngAfterViewInit(): void {
    this.ref.nativeElement.focus();
  }

}
