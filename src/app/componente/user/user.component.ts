import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { UsersService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService]
})
export class UserComponent implements OnInit {

  personas: any = [];

  constructor( private userService: UsersService ) {

  }

  /*getAll(){
    this.userService.getUsers().subscribe(data =>{
      this.personas = data
      console.log(this.personas)
    }),

      (    error: any) => {
        console.log(error)
      }


  }*/

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.personas = data;

    });
  }
}
