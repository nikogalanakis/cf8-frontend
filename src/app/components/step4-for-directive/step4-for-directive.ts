import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';

@Component({
  selector: 'app-step4-for-directive',
  imports: [Step3PersonTableInput],
  templateUrl: './step4-for-directive.html',
  styleUrl: './step4-for-directive.css',
})
export class Step4ForDirective {
  person: Person[] = [
    { firstname: 'Nikos', lastname: 'Papadopoulos', email: 'nikos@aueb.gr' },
    { firstname: 'Maria', lastname: 'Papadopoulou', email: 'papadopoylos@aueb.gr' },
    { firstname: 'Giorgos', lastname: 'Giorgiou', email: 'george@aueb.gr' },
        { firstname: 'Giorgos', lastname: 'Giorgiou', email: 'george@aueb.gr' },
    { firstname: 'Eleni', lastname: 'Eleniou', email: 'eleni@aueb.gr' },
  ];

}
