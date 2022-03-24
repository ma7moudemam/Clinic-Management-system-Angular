import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  constructor(public appointmentService: AppointmentService) { }

  appointment:Appointment[]=[];
  ngOnInit(): void {
    this.appointmentService.getAllAppointments().subscribe(data=>{
      this.appointment = data;
      console.log(data)
    })
  }

}
