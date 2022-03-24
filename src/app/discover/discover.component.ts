import { Component, EventEmitter, Input,OnChanges,OnDestroy,OnInit, Output, SimpleChanges } from '@angular/core';
import { ClinicService } from '../clinic.service';
import { UserService } from '../user.service';
// import ClinicService from "src/app/service/clinic.service";
@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit,OnDestroy {
  clinics:any=[];
  // @Input() clinic:any={};
  @Output() profile:EventEmitter<any> = new EventEmitter()
  clinicProfile:any={}
  getAllClinics(){
    this.clinicSer.getAllClinics().subscribe(a=>{
      console.log(a)
      this.clinics = a;
    })
  }
  constructor(public clinicSer:ClinicService, public userSer:UserService) { }

  ngOnInit(): void {
    this.getAllClinics();
  
  }

  ngOnDestroy(): void {
    console.log("from discover destroy")
    console.log(this.clinicProfile)
    this.profile.emit(this.clinicProfile)
  }

}
