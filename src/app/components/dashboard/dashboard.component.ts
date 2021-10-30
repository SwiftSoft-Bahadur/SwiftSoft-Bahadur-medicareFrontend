import { MedicineService } from './../../services/medicine/medicine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  arrs: any[] = [];
  statsCard: number[] = [...Array(3).keys()];

  constructor(private _medicineService: MedicineService) { }

  ngOnInit(): void {
  
    this.indexMedicine()

  }

  indexMedicine() {
    this._medicineService.indexMedicine()
      .subscribe((res) => {
        this.arrs = res;
      })
  }
}
