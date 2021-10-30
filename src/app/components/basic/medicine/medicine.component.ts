import { MedicineService } from './../../../services/medicine/medicine.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
  medicineForm: any;
  constructor(private _medicineService: MedicineService, private _location: Location) { }

  ngOnInit(): void {
    this.medicineForm = new FormGroup({
      medicineName: new FormControl('',
        [Validators.required, Validators.minLength(3)]),
      medicineCompany: new FormControl('', Validators.required),
      medicinePrice: new FormControl('', Validators.required),
      medicineQty: new FormControl('', Validators.required),
      expiry: new FormControl('', Validators.required),
      medicineImg: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    let medicineformobj = this.medicineForm.value;
    let storeMedicine = {
      medicineName: medicineformobj.medicineName,
      medicineCompany: medicineformobj.medicineCompany,
      medicinePrice: medicineformobj.medicinePrice,
      medicineQty: medicineformobj.medicineQty,
      expiry: medicineformobj.expiry,
      medicineImg: medicineformobj.medicineImg,
    }

    this._medicineService.storeMedicine(storeMedicine).subscribe((res) => console.log(""))
    this.medicineForm.reset(this.medicineForm.value);

  }

  back() {
    this._location.back();
  }

}
