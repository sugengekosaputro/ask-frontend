import { Injectable } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdleService {

  public idle$: Subject<boolean> = new Subject();
  public wake$: Subject<boolean> = new Subject();

  isIdle = false;
  idleAfterSeconds = 5;
  countDown: any;

  constructor() {
    fromEvent(document, 'mousemove').subscribe(() => this.onInteraction());
    fromEvent(document, 'touchstart').subscribe(() => this.onInteraction());
    fromEvent(document, 'keydown').subscribe(() => this.onInteraction());
    fromEvent(document, 'onload').subscribe(() => this.onInteraction());
  }

  onInteraction() {
    if (this.isIdle) {
      this.isIdle = false;
      this.wake$.next(true);
    }

    clearTimeout(this.countDown);
    this.countDown = setTimeout(() => {
      this.isIdle = true;
      this.idle$.next(true);
    }, this.idleAfterSeconds * 1_000);
  }
}
