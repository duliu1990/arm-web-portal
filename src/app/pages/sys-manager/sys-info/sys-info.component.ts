import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PersonalMsg } from '../../personal-center/personal-msg/personal-msg.model';

@Component({
  selector: 'app-sys-info',
  templateUrl: './sys-info.component.html',
  styleUrls: ['./sys-info.component.scss']
})
export class SysInfoComponent implements OnInit {

  msgData: PersonalMsg[] = []

  tbWd: string[] = ["5%", "15%", "65%", "15%"];

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly PersonalMsg[] = [];

  setOfCheckedId = new Set<number>();

  constructor(private message: NzMessageService, private http: HttpClient,) {

  }

  ngOnInit(): void {
    this.http.get<any>('/assets/data/personal-msg.json').subscribe(el => {
      this.msgData = el;
    });
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly PersonalMsg[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = this.listOfCurrentPageData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  /**
   * Delete the selected msg
   */
  deleteMsg(item?: PersonalMsg): void {
    if (item) {
      this.message.create('success', `Item ${item.id} delete success.`);
    } else {
      this.message.create('success', `Item ${this.setOfCheckedId.size} delete success.`);
    }

  }

}

