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
    
    this.sub  = this.route.params.subscribe(params=>  (
                  this.getSubGroups("Testing")
                    // aqui va la funcion de get subgroups 
                    //this.groupId = +params['id']
                     )// con esta info harias el service de get subgroups, y activas el primero 
                     
                     )
    console.log(this.sub);
    console.log(this.groupId);
    
   /* this.getSubGroups(); */
    //this.getProducts(0,"prueba"); // esto no sera necesario cuando se implement el getSubGroups service 

  }
  public Log(){
    console.log(this.groupId);
  }
  private getSubGroups(name:string){ 
    this.subgroups= [];
   
    for(var i=0;i<name.length/2;i++){
      this.subgroups.push({
        name:name + " subgrupo: " + (i+1),
        description:"Papitas muy ricas",
        groupId:"123456",
        id:"520"
      } as SubGroup);

      this.getProducts(0,"pruebita");
    } 
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
    this.products = []
    for(var i=0;i<name.length/2;i++){
      this.products.push({
        name:"Productos de " + name + " subgrupo: " + (i+1),
        description:"Papitas muy ricas",
        productId:"123456",
        price:"520"
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
        price:"520"
      } as Product);
    }
  }

}
