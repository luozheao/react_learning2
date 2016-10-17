import React from 'react';
import ReactDOM from 'react-dom';
import  $ from 'jquery';
//import { Menu, Dropdown, Icon } from 'antd';
//const Item =Menu.Item;
//require("!style!css!./node_modules/antd/dist/antd.css");

//let colorAPP =require('!style!css?modules!./APP.css');
import colorAPP from '!style!css?modules!./APP.css';//导入
 

let otherApp =require('!style!css?modules!./otherApp.css');

import jsonObj  from '!json!./tsconfig.json' ;  //  ./ 表示当前目录下, !表示转义,有特殊意思 ,找到.json文件再调用json来解析

//let jsonObj={name:'luozheao'}

class App extends React.Component {
    constructor(props) {
         super(props);  

    }
    test(){
        alert(jsonObj.name);
   }
    test2() {
        
    }
    componentDidMount(){}
    render() {

        return (
            <div >
                <input defaultValue={jsonObj.name}  onBlur={this.test2.bind(this)}  className="luojie"  ref={'luojie'}/>
                <div className={colorAPP.color}>luozheao</div>
                <div className={otherApp.color}>luozheao</div>
                <div onMouseDown={this.test.bind(this)}>click</div>
            </div>
        );
    }
}

//export default App;
module.exports ={App};