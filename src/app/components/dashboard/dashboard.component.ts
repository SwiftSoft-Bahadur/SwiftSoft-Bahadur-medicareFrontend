import { MedicineService } from './../../services/medicine/medicine.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  arrs: any[] = [];
  admin: string = '';
  statsCard: number[] = [...Array(3).keys()];

  constructor(private _medicineService: MedicineService,
    private _location: Location, private _sessionService: SessionService) { }

  ngOnInit(): void {
    this.admin = this._sessionService.getUser().name
    this.indexMedicine()
  }

  indexMedicine() {
    this._medicineService.indexMedicine()
      .subscribe((res) => {


        this.arrs = res;
      })
  }

  back() {
    this._location.back();
  }

  logout() {
    this._sessionService.deleteUser();
  }
}
