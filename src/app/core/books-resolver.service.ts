import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { BookTrackerError } from '../models/bookTrackerError';
import { Book } from '../models/book';
import { DataService } from '../core/data.service'

@Injectable({ providedIn: 'root' })
export class BooksResolverService implements Resolve<Book[] | BookTrackerError> {

  constructor(private dataService: DataService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<Book[] | BookTrackerError> | Promise<Book[] | BookTrackerError> | Book[] | BookTrackerError {
    return ;
  }
}
