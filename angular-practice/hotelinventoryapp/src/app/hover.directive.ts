import { Directive, ElementRef, OnInit, Inject, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() appHover: string = 'red'

  constructor(private element: ElementRef, private renderer : Renderer2) {

   }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.color
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.appHover)
  }

  @HostListener('mouseenter') onMouseEnter () {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green')

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.appHover)  }

}
