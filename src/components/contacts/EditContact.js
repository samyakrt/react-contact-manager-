import React, { Component } from 'react';
import {Consumer} from '../../Context';
import TextInputGroup from '../layouts/TextInputGroup';
import axios from 'axios';
import * as Toastr from 'toastr';
import 'toastr/build/toastr.min.css';

export default class EditContact extends Component {
    state = {
        id:'',
        name:'',
        email:'',
        number:'',
        errors:[]
    };

    // get contact info to be edited
    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res =>this.setState({
            id:res.data.id,
            name:res.data.name,
            email:res.data.email,
            number:res.data.phone
        })).catch(error => console.log(error));
    }

    onInputChange = (e) => 
        this.setState({
            [e.target.name]:e.target.value
        });
    
    submitForm = (dispatch,e) => {
        e.preventDefault();
        const {id,name,email,number} = this.state;

        if(name === ''){
            this.setState({
                errors:{name:'name is required'}
                
            });
            return;
        }

        if(email === ''){
            this.setState({
                errors:{email:'email is required'}
            })
            return;
        }
        if(number === ''){
            this.setState({
                errors:{number:'number is required'}
            })
            return;
        }

       if(name !== '' && email !== '' && number !== ''){
        const updatedContacts = {
            id,
             name,
             email,
             phone:number,
         };
         axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`,{
             
             name:updatedContacts.name,
             email:updatedContacts.email,
             phone:updatedContacts.phone,
         }).then(res => dispatch({type:'EDIT_CONTACT',payload:updatedContacts}) ).then(Toastr.success('contact updated'));
 
         this.setState({
             name:'',
             email:'', 
             number:'',
             errors:{},
         });

         this.props.history.push('/');
       }
        
    }
    
    render() {
        const {name,email,errors,number} = this.state;

        return (
            <Consumer>
                {
                 
                     value => {

                        return(
                                      
                        <div className="card mb-3">
                            <div className="card-header">
                                Add Contact
                            </div>

                         <div className="card-body">
                            <form onSubmit={(e)=>this.submitForm(value.dispatch,e)}>

                                <TextInputGroup label="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter name..."
                                    value={name}
                                    onChange={this.onInputChange}
                                    error={errors.name}
                                />

                                <TextInputGroup label="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter email..."
                                    value={email}
                                    onChange={this.onInputChange}
                                    error={errors.email}
                                />

                                <TextInputGroup label="number"
                                    name="number"
                                    type="text"
                                    placeholder="Enter contact no..."
                                    value={number}
                                    onChange={this.onInputChange}
                                    error={errors.number}
                                />

                                <button className="btn btn-block btn-success">Update</button>
                            </form>
                        </div>
            </div>
                        )
                     }
                 
                }
            </Consumer>
     )
    }
}
