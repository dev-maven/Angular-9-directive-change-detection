import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { startWith, map, distinctUntilChanged, shareReplay } from 'rxjs/operators';

const QUERY: Map<string, string> = new Map([
  ['desktop', '(min-width: 1200px)'],
  ['tablet', '(min-width: 768px)'],
  ['mobile', '(min-width: 0)'],
]);

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private _size$: Observable<string>;

  constructor() {
    this._size$ = fromEvent(window, 'resize')
      .pipe(
        startWith(this._getScreenSize()),
        map((event: Event) => {
          return this._getScreenSize();
        }),
        distinctUntilChanged(),
        shareReplay(1)
      );
  }

  public get size$(): Observable<string> {
    return this._size$;
  }

  private _getScreenSize(): string {
    const [[newSize = 'never']] = Array.from(QUERY.entries())
      .filter(([size, mediaQuery]) => window.matchMedia(mediaQuery).matches);
    return newSize;
  }
}
