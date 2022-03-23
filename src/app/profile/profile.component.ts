import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../models/user';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  constructor(public profileSer: ProfileService, public router: Router,
     public route: ActivatedRoute){}

  speakerDetailsId=0;
  speakerEditId=0;
  user:IUser[]=[];
  baseUrl = 'http://localhost:8080';

  ngOnInit(): void {
    this.profileSer.getUserById().subscribe((a:any)=>this.user=a)
  }

  edit(id:any) {
    console.log(id)
    this.router.navigate(['/create-user',  id])
  }
}
