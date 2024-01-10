import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-log',
  templateUrl: './personal-log.component.html',
  styleUrls: ['./personal-log.component.scss']
})
export class PersonalLogComponent {

  data = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}
