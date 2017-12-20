import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '.nav-toggler',
})
export class NavToggleDirective {
  constructor() { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('radiopage');
  }
}
export const NavToggleDirectives = [NavToggleDirective];
