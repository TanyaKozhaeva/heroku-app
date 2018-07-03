import { NativeDateAdapter } from '@angular/material';
import * as moment from 'moment';

export class CustomDateAdapter extends NativeDateAdapter {
    format(date: Date, displayFormat: Object): string {
        moment.locale('en-EN');
        let formatString = (displayFormat === 'input')? 'DD.MM.YY' : 'DD.MM.YY';
        return moment(date).format('DD.MM.YY');
    }
}