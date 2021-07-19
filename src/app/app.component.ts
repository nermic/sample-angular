import { HomeService } from './shared/components/home/home.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { TodoService } from './shared/components/todo/todo.service';
import { NavigationService } from './core/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private homeService: HomeService, private todoService: TodoService, private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.init();
  }

  @HostListener('document:keydown.enter')
  onEnter() {
    const [currentItem, currentIndex] = this.navigationService.getCurrentItem();
    if (currentItem.nodeName === 'INPUT' && 'value' in currentItem && currentItem.value) {
      this.todoService.add({ name: currentItem.value, completed: false });
      currentItem.value = '';
    } else {
      this.homeService.toggleComplete(currentIndex - 1);
    }
  }

  @HostListener('document:keydown.arrowdown')
  onArrowDown() {
    this.navigationService.Down();
  }

  @HostListener('document:keydown.arrowup')
  onArrowUp() {
    this.navigationService.Up();
  }

  // @HostListener('document:keydown.softright')
  @HostListener('document:keydown.arrowright')
  onSoftRight() {
    const [currentItem, currentIndex] = this.navigationService.getCurrentItem();
    if (currentItem.nodeName === 'IMG') {
      this.homeService.softRight(currentIndex - 1);
      // this.navigationService.Up();
    }
  }

  // @HostListener('document:keydown.softleft')
  @HostListener('document:keydown.arrowleft')
  onSoftLeft() {
    const [currentItem, currentIndex] = this.navigationService.getCurrentItem();
    if (currentItem.nodeName === 'IMG') {
      this.homeService.softLeft(currentIndex - 1);
      // this.navigationService.Up();
    }
  }
}
