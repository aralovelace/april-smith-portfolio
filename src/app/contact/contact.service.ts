import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class ContactService {

    constructor(private http: HttpClient) {}

    submitMessage(messageContent: any): any {
      return this.http.post('https://aralovelace-portfilio.firebaseio.com/contact.json', messageContent)
        .pipe(tap(restData => {}));

     }


}
