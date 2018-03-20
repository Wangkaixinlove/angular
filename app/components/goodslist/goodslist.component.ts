import { Component, OnInit, Input } from '@angular/core';
import { GetdataService} from '../../services/getdata.service';//引入服务
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public getdata:GetdataService) { 

  }
  @Input() list:Array<any>;
  index:number;
  getIndex(i){
   this.index=i;
  }
  ngOnInit() {
    this.getdata.addData(200);
    this.getdata.addData(100);
    this.getdata.addData(300);
    console.log(this.getdata.list);
  }
}
