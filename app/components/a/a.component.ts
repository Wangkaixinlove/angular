import { Component, OnInit,Input, Output,EventEmitter ,Optional } from '@angular/core';//引入装饰器
import { GetdataService} from '../../services/getdata.service';//引入服务
@Component({
  selector: 'app-a',//引入组件使用的标签
  templateUrl: './a.component.html',//引入外部文件
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
 // getdata=new GetdataService();//实例化服务，服务其实是一个对象，有属性和方法，实例化以后就可以使用了,默认是public
  constructor(@Optional() public getdata:GetdataService) { }//在构造函数中，与上面一句的作用相同
  @Input() name;
  @Input() arrData:Array<any>;
  @Output() getIndex=new EventEmitter;//getIndex传给父组件
  num:number;
  ngOnInit() {
    console.log(1);
   // this.name="0";
   this.getdata.addData(200);
   this.getdata.addData(100);
   this.getdata.addData(300);
   console.log(this.getdata.list);
  }
  fn(i){
    this.getIndex.emit(i);
    alert('ok');
    //this.getdata.getIndex(i);
  }
  ngOnChanges() {//第一个先被触发的，范围大
    console.log(0);
  }
  ngDocheck(){//某个元素
    console.log(2);
  }
}
