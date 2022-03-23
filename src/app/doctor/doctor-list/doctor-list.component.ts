import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-Doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  constructor(public userSer: UserService, public router: Router, public route: ActivatedRoute) { }
  users:IUser[]=[];
  load(){
    this.userSer.getAllDoctor().subscribe((a:any)=>this.users=a)
  }
  ngOnInit(): void {    
    this.userSer.getAllDoctor().subscribe((a:any)=>this.users=a)
    console.log(this.users); 
  }
  delete(id:any) {
    this.userSer.deleteUserById(id).subscribe(() => 
       this.load()
      )
  }

  editUser(id: any) {
    this.router.navigate(['/create-user',id, {editUser: true}])
  }

}
