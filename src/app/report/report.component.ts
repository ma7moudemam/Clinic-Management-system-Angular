import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentReportService } from '../appointment-report.service';
import { ChartService } from '../chart.service';
import { ReportService } from '../report.service';




@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {

  inCome:any
  female:any
  male:any
  invoice:any = []
  appointmentReport: any
  piedata: any;

  
  constructor(public report: ReportService, public chart: ChartService , public appointment: AppointmentReportService , public router: Router,
    public route: ActivatedRoute){}

  ngOnInit(): void {

        // totelIncome => dn
        this.report.getInvoice().subscribe(data => this.inCome = data),

        // patientChart
        this.chart.getPatientInvoice().subscribe(data => {
          this.male = data["male"]
          this.female = data["female"]

          this.piedata = {
            labels: ['Femal','Male'],
            datasets: [
                {
                    data: [ this.female, this.male],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                    ]
                }]
            };  
        })

        // invoicesReport => dn
        this.report.getInvoicesReport().subscribe(data => {
          this.invoice = data
        })

        // appointmentReport
        this.appointment.getAppointmentReport().subscribe(data => {
          this.appointmentReport = data
        })
    
    }
}

