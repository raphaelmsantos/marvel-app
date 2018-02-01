import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NotificationService {

    isLoading = new EventEmitter<boolean>();

    constructor() { }

    setIsLoading(isLoading: boolean) {
        this.isLoading.emit(isLoading);
    }

}
