import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'textarea[autoresize]',
})
export class TextareaAutoresizeDirective {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @HostListener(':input')
  onInput() {
    this.resize();
  }

  ngAfterViewInit() {
    this.resize();
  }

  resize() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', '0');
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', `${this.elementRef.nativeElement.scrollHeight}px`);
  }
}
