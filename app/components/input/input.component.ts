import { Component, OnInit } from '@angular/core';
import { GetdataService} from '../../services/getdata.service';//引入服务
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(public getdata:GetdataService) { }
  list = [];
  data = ' ';
  ngOnInit() {//初始化
    console.log(1);
  }
  keyData(e){
    if(e.keyCode == 13){
        this.list.push(this.data);
        this.getdata.setItem(this.data,this.data);
        this.data='';
        console.log("input:"+this.list);
    }
  }
  updateList(i){
   //console.log(this.list.slice(i-1,i));
     this.getdata.deleteItem(this.list[i]);
    this.list.splice(i,1);
    console.log(this.list);
  }
  ngDocheck(){
    console.log(2);
  }
}
