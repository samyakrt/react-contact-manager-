import React,{Component} from 'react';
import axios from 'axios';

const Context = React.createContext();
const reducer = (state,action)=>{

    switch(action.type){
        case 'DELETE_CONTACT':

        return{
            ...state,
            contacts: state.contacts.filter(contact=> contact.id !== action.payload)
        }

      case 'ADD_CONTACT':

      return {
          ...state,
          contacts:[...state.contacts,action.payload],
      }

      case 'EDIT_CONTACT':

      return {
          ...state,
          contacts:state.contacts.filter(contact => {
            if(contact.id === action.payload.id){   
              contact.name = action.payload.name;
              contact.email = action.payload.email;
              contact.number = action.payload.phone;
              
            } 
            return contact;
          }),
      }
        default:
            return state;
    }
   
}
export class Provider extends Component{

    state ={
        contacts:[
           
        ],
        dispatch:(action)=>this.setState(state =>reducer(state,action))
    };

    componentWillMount(){
        return(
            <h2>Component loading</h2>
        )
    }
    async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');

        this.setState({
            contacts:res.data.map((data) =>{
                        const {id,name,email,phone} = data;
    
                        return{id:id,name:name,email:email,number:phone}
                    })
        })
            // .then(response => response.data)
            // .then(json => this.setState({
            //     contacts:json.map((data) =>{
            //         const {id,name,email,phone} = data;

            //         return{id:id,name:name,email:email,number:phone}
            //     })
            // }))
    }

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;