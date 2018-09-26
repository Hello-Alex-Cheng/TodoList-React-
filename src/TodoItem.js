
import React from 'react';

/* 引入antd */
import { Button, Input, List } from 'antd';


/* 无状态组件 / 提升性能 */

const TodoItem = (props) => {
    return (
        <div style= {{padding:'20px'}}>
            <div>
                <Input 
                    onChange= { props.handleInputChange} 
                    value= { props.inputValue } 
                    style= {{ width:'500px', marginRight:'20px', marginBottom: '20px' }} 
                    placeholder='add item' 
                />
                <Button onClick= { props.handleBtnClick } type='primary'>addItem</Button>
            </div>
            <List
                style= {{ width: '500px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick= { () => { props.handleItemDelete(index) } }>{item}</List.Item>)}
            />
        </div>
    );
}



/* UI 组件 / 傻瓜组件 */

// class TodoItem extends Component {
//     render (){

//         const props = this.props ;

//         return (
//             <div style= {{padding:'20px'}}>
//                 <div>
//                     <Input onChange= { props.handleInputChange} value= { props.inputValue } style= {{ width:'500px', marginRight:'20px', marginBottom: '20px' }} placeholder='add item' />
//                     <Button onClick= { props.handleBtnClick } type='primary'>addItem</Button>
//                 </div>
//                 <List
//                     style= {{ width: '500px' }}
//                     bordered
//                     dataSource={props.list}
//                     renderItem={(item, index) => (<List.Item onClick= { () => { props.handleItemDelete(index) } }>{item}</List.Item>)}
//                 />
//             </div>
//         );
//     }
// }

export default TodoItem;

