import React, { Component } from 'react';

import TodoItem from './TodoItem';

/* 引入 store */
import store from './store';

/* 引入antd */
// import { Button, Input, List } from 'antd';
import 'antd/dist/antd.css';


import { getInitList } from './store/actionCreators';

class Todolist extends Component {

    constructor(props){
        super(props);

        this.state = store.getState();
        console.log("this.state - - ", this.state);
        
        /* 绑定元素方法，提高性能 */
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);

        store.subscribe(()=>{
            /* 注意 : 这里我们通过 store.subscribe 来订阅 store 的 state */
            /* 如果 store 的 state 发生变化，那么就会执行此回调函数，通过 this.setState 方法来改变组件的state  */
            this.setState( store.getState() );
        });
    }

    componentDidMount(){


        const action = getInitList(); 
        
        console.log(action);
        store.dispatch(action);

    }

    render(){
        return <TodoItem 
            handleInputChange= {this.handleInputChange}
            inputValue= {this.state.inputValue}
            handleBtnClick= {this.handleBtnClick}
            list= {this.state.list}
            handleItemDelete= {this.handleItemDelete}
        />;
    }
    /* input change */
    handleInputChange(e){
        console.log(e.target.value);
        let value = e.target.value;
        const action = {
            type : 'change_input_value',
            value
        };
        store.dispatch(action);
    }

    /* button clicked */
    handleBtnClick(){
        let action = {
            type : 'add_list_item'
        };
        store.dispatch(action);
    }

    /* list item delete */
    handleItemDelete(index){
        console.log('index = ',index);
        let action = {
            type : 'delete_list_item',
            index
        };
        store.dispatch(action);
    }
}

export default Todolist;