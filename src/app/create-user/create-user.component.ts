import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userId:any;
  userData: any = {}
  file: any;
  constructor(public profileSer: ProfileService,  public route:ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.get('id')) {
        this.userId = Number(params.get('id'));
        this.profileSer.getUserById().subscribe((a:any)=> this.userData=a[0] )      
      }
    })
  }

  update() {
    this.profileSer.editUserById(this.userData, this.file).subscribe(() => this.router.navigate(['/profile']))
  }

  onFileChange(s:any){
    this.file=s.target.files[0];
  }
}
