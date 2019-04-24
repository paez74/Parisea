import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/web_services/products.service';
import { Product } from 'src/app/models/product';
import { MessageServiceUtil } from 'src/app/util/MessageServiceUtil';
import { ActivatedRoute , Router} from '@angular/router';
import { SubGroupService } from 'src/app/web_services/subgroups.service';
import { SubGroup } from 'src/app/models/subgroups';


@Component({
  selector: 'app-products-by-sub',
  templateUrl: './productsBySub.component.html',
  styleUrls: ['./productsBySub.component.css'],
  providers: [ ProductService,SubGroupService,  MessageServiceUtil ]
})

export class ProductsBySubComponent implements OnInit, OnDestroy {
  public products:Product[] = [];
  public subgroups:SubGroup[] = [];
  public selectedSubGroup:SubGroup[];
  public selectedSubGroupId:number;
  public group:any;
  /*
    Bebidas:1
    Paquetes:2
    Comida:3
    Mobiliario:4
    Musica:5
    Personal:6
    Entretenimiento:7
    Infantil:8
  */
  groupId:number;
  private sub: any;
  public home = false;
  constructor(
    private errorHandler: MessageServiceUtil,
    private pService: ProductService,
    private subGroupService : SubGroupService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.sub  = this.route.params.subscribe(params =>  {
                    this.subgroups = [];
                    this.groupId = params['id']
                    console.log(this.groupId)
                    this.getSubGroupsByGroupOffline(this.groupId)
                    // aqui va la funcion de get subgroups
          }         // con esta info harias el service de get subgroups, y activas el primero

                     )
    console.log(this.groupId);

   /* this.getSubGroups(); */
    //this.getProducts(0,"prueba"); // esto no sera necesario cuando se implement el getSubGroups service

  }

  private getSubGroups(groupId:number){
    console.log("groupId es " + groupId);
    this.getSubGroupsByGroupOffline(groupId);
    this.getProducts(0,"pruebita");
    /*for(var i=0;i<name.length/2;i++){
      this.subgroups.push({
        name:name + " subgrupo: " + (i+1),
        description:"Papitas muy ricas",
        groupId:"123456",
        id:"520"
      } as SubGroup);

      this.getProducts(0,"pruebita");
    }  */
    // esperando a service
    /*this.subGroupService.getSubGroupsByGroup(this.group.id,0).subscribe( // ciudad es 0 porque no esta implementado
      result => {
          this.subgroups = (result.body);
          this.getProducts(this.subgroups[0].id);
          this.selectedSubGroup = this.subgroups[0];
          console.log(this.subgroups);
      },
      error =>{
        this.errorHandler.handleNetRequestError(error);
      }
      )
      */
  }

  private getProducts(subgroupId:number, name:string = "placeholder"){ // name string es temp para preub
    this.selectedSubGroupId = subgroupId;
    console.log(this.selectedSubGroupId)
    this.products = []
    for(var i=0;i<name.length/2;i++){
      this.products.push({
        name:"Productos de " + name + " subgrupo: " + (i+1),
        description:"Papitas muy ricas",
        productId:"123456",
        price:520
      } as Product);
    }/*
    this.pService.getProductsBySubGroup(subgroupId,0).subscribe(
       result => {
         this.products = (result.body);
         console.log(this.products);

       },
       error => {
         this.errorHandler.handleNetRequestError(error);
       }
    ); */
   console.log(this.products)
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  private getProductsWName(name:string,size:number){ // just for testing
    this.products = [];
    for(var i=0;i<size;i++){
      this.products.push({
        name: "Productos de subgrupo " + name[name.length-1],
        description: name + " muy ricas",
        productId:"123456",
        price:520
      } as Product);
    }
  }



  /// ONLY FOR TESTING
  public getSubGroupsByGroupOffline(groupId:number){
   console.log(groupId);
   var name = "default";
   console.log(groupId.toString() == '1')
   /* Bebidas:2
Paquetes:3
Comida:4
Mobiliario:5
Musica:6
Personal:7
Entretenimiento:8
Infantil:9 */
    switch (groupId.toString()) {
        case "1":
        this.subgroups.push({
          name:"Paquete 1",
          description:"Refrescante",
          groupId:"0",
          id:"11"
        } as SubGroup);

        this.subgroups.push({
          name:"Paquete 2",
          description:"Alcohol",
          groupId:"0",
          id:"02"
        } as SubGroup);
        break;
        case '2':
        name = "Alcohol";
        this.subgroups.push({
            name:"Refrescos",
            description:"Refrescante",
            groupId:"1",
            id:"11"
          } as SubGroup);

          this.subgroups.push({
            name:"Tequila",
            description:"Alcohol",
            groupId:"1",
            id:"12"
          } as SubGroup);

          this.subgroups.push({
            name:"Ron",
            description:"Alcohol",
            groupId:"1",
            id:"13"
          } as SubGroup);
          this.subgroups.push({
            name:"Vinos",
            description:"Alcohol",
            groupId:"1",
            id:"14"
          } as SubGroup);
          console.log(this.subgroups+ "algo") ;
            break;

        case '3':
        name = "Comidas";
        this.subgroups.push({
          name:"Botanas",
          description:"Refrescante",
          groupId:"3",
          id:"31"
        } as SubGroup);

        this.subgroups.push({
          name:"StreetFood",
          description:"Alcohol",
          groupId:"3",
          id:"32"
        } as SubGroup);

        this.subgroups.push({
          name:"Plato Fuerte",
          description:"Alcohol",
          groupId:"3",
          id:"33"
        } as SubGroup);
        this.subgroups.push({
          name:"Catering",
          description:"Alcohol",
          groupId:"3",
          id:"34"
        } as SubGroup);
            break;
        case '4':
        name = "Mobiliario";
        this.subgroups.push({
          name:"Sillas",
          description:"Refrescante",
          groupId:"4",
          id:"41"
        } as SubGroup);

        this.subgroups.push({
          name:"Mesas",
          description:"Alcohol",
          groupId:"4",
          id:"42"
        } as SubGroup);

        this.subgroups.push({
          name:"Pistas",
          description:"Alcohol",
          groupId:"4",
          id:"43"
        } as SubGroup);
        this.subgroups.push({
          name:"Iluminacion",
          description:"Alcohol",
          groupId:"4",
          id:"44"
        } as SubGroup);
            break;
        case '5':
        name="Musica";
        this.subgroups.push({
          name:"Acustico",
          description:"Refrescante",
          groupId:"5",
          id:"51"
        } as SubGroup);

        this.subgroups.push({
          name:"Dj",
          description:"Alcohol",
          groupId:"5",
          id:"52"
        } as SubGroup);

        this.subgroups.push({
          name:"Grupos",
          description:"Alcohol",
          groupId:"5",
          id:"53"
        } as SubGroup);
            break;
        case '6':
        name = "Personal";
        this.subgroups.push({
          name:"Meseros",
          description:"Refrescante",
          groupId:"6",
          id:"61"
        } as SubGroup);

        this.subgroups.push({
          name:"Guardias",
          description:"Alcohol",
          groupId:"6",
          id:"62"
        } as SubGroup);

        this.subgroups.push({
          name:"Chefs",
          description:"Alcohol",
          groupId:"6",
          id:"63"
        } as SubGroup);
            break;
        case '7':
        name="Entretenmiento";
        this.subgroups.push({
          name:"Pirotecnicia",
          description:"Refrescante",
          groupId:"7",
          id:"71"
        } as SubGroup);

        this.subgroups.push({
          name:"Bailarines",
          description:"Alcohol",
          groupId:"7",
          id:"72"
        } as SubGroup);

        this.subgroups.push({
          name:"Mimos",
          description:"Alcohol",
          groupId:"7",
          id:"73"
        } as SubGroup);
        this.subgroups.push({
          name:"Street Performers",
          description:"Alcohol",
          groupId:"7",
          id:"74"
        } as SubGroup);
            break;
        case '8':
        name ="Infantil";
        this.subgroups.push({
          name:"Avengers",
          description:"Alcohol",
          groupId:"8",
          id:"81"
        } as SubGroup);
        this.subgroups.push({
          name:"Princesas",
          description:"Alcohol",
          groupId:"8",
          id:"82"
        } as SubGroup);
        this.subgroups.push({
          name:"Barney",
          description:"Alcohol",
          groupId:"8",
          id:"83"
        } as SubGroup);
        break;
        default:

        console.log("Entro en el default")
            break;
    }

    console.log(this.subgroups);
    this.getProducts(groupId,this.subgroups[0].name);
}

}
