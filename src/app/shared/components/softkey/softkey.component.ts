import { Component } from '@angular/core';
import { NavigationService } from '../../../core/services/navigation.service';

interface Softkey {
  left: string;
  center: string;
  right: string;
}

@Component({
  selector: 'app-softkey',
  templateUrl: './softkey.component.html',
  styleUrls: ['./softkey.component.css']
})
export class SoftkeyComponent {
  private inputSoftKey: Softkey = { left: 'Input Plan', center: 'Select', right: 'Help' };
  private homeSoftKey: Softkey = { left: 'Tariff Plan', center: 'Select', right: 'Help' };
  private freeSoftKey: Softkey = { left: '', center: 'Select', right: 'Help' };
  private toDoSoftKey: Softkey = { left: '', center: 'Toggle', right: 'Delete' };
  public softkey: Softkey = this.homeSoftKey;

  constructor(private navigationService: NavigationService) {
    this.toHearChangesInNavigation();
  }

  private toHearChangesInNavigation(): void {
    this.navigationService.currentItem.subscribe(current => {
      const isATask = current.nodeName === 'IMG';
      if (isATask && this.softkey !== this.homeSoftKey) {
        this.softkey = this.homeSoftKey;
      } else if (!isATask && this.softkey !== this.inputSoftKey) {
        this.softkey = this.inputSoftKey;
      }else if (!isATask && this.softkey !== this.toDoSoftKey) {
        this.softkey = this.toDoSoftKey;
      }
    });
  }
}
