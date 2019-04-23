import { Component } from '@angular/core';
import { GroupService } from 'src/app/web_services/groups.service';
import { Group } from 'src/app/models/groups';
import { MessageServiceUtil } from 'src/app/util/MessageServiceUtil';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GroupService,MessageServiceUtil]
})
export class AppComponent {
  title = 'parisea-project';
  public groups:any[] = [];

  constructor(
    private gService: GroupService,
    private errorHandler: MessageServiceUtil,
    private router: Router
  ){}
  ngOnInit() {
  this.getGroupIds();

  }
  
  public onChange(id){
    console.log(id);
    this.router.navigate(['/group', id]);
  }
  public getGroupIds(){
    this.groups = [];
      this.groups.push({
        name:"Paquetes",
        description:"Todo para tu fiesta",
        id:"1",
      } as Group);
      this.groups.push({
        name:"Bebidas",
        description:"Todo para tu fiesta",
        id:"2",
      } as Group);
      this.groups.push({
        name:"Comidas",
        description:"Todo para tu fiesta",
        id:"3",
      } as Group);
      this.groups.push({
        name:"Mobiliario",
        description:"Todo para tu fiesta",
        id:"4",
      } as Group);
      this.groups.push({
        name:"Musica",
        description:"Todo para tu fiesta",
        id:"5",
      } as Group);
      this.groups.push({
        name:"Personal",
        description:"Todo para tu fiesta",
        id:"6",
      } as Group);
      this.groups.push({
        name:"Entretenimiento",
        description:"Todo para tu fiesta",
        id:"7",
      } as Group);
      this.groups.push({
        name:"Infantil",
        description:"Todo para tu fiesta",
        id:"8",
      } as Group); 
    
     // not implemented yet , by cities waiting on  service  
    /*this.gService.getGroups().subscribe( result => {
      this.groups = (result.body);
      console.log(result.body);
  },
  error =>{
    this.errorHandler.handleNetRequestError(error);
  }
    ) */
    }
  
}
