import { Component, HostListener } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project_angular';
  darkMode = false;

toggleTheme(){
  this.darkMode = !this.darkMode;
  document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light')
}

  click() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }

  // scroll to top
  isShow!: boolean;
  topPosToStartShowing = 100;
  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
