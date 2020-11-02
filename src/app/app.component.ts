import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Angular will invoke the setter each time the element is added or removed from the view.
  @ViewChild('input')
  set input(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus()
    }
  }

  public showInput: boolean = false;

  public onShowInput(): void {
    this.showInput = !this.showInput;
  }
}
