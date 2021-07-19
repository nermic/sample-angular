import { Injectable } from '@angular/core';


export interface Home {
  name: string;
  completed: boolean;
  open: boolean;
}

@Injectable({providedIn: 'root'})
export class HomeService {

  constructor() { }
  private homes: Home;

  softRight(index: number): Home {
    // this.homes.push(home);
    this.homes.open = !this.homes[index].open;
    return this.homes;
  }

  softLeft(index: number): Home {
    // this.homes.splice(index, 1);
    this.homes.open = !this.homes[index].open;
    return this.homes;
  }
  toggleComplete(index: number): Home {
    this.homes.completed = !this.homes[index].completed;
    return this.homes;
  }
}
