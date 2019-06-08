import React, { Component } from 'react';
import {Consumer} from '../../Context';
import uuid from 'uuid';
import TextInputGroup from '../layouts/TextInputGroup';
import axios from 'axios';
import * as Toastr from 'toastr';
import 'toastr/build/toastr.min.css';

export default class AddContact extends Component {
    state = {
        name:'',
        email:'',
        number:'',
        errors:[]
    };

    onInputChange = (e) => 
        this.setState({
            [e.target.name]:e.target.value
        });
    
    submitForm = async (dispatch,e) => {
        e.preventDefault();
        const {name,email,number} = this.state;

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
        const newContacts = {
            id:uuid(),
             name,
             email,
             number,
         };

         const res = await axios.post(`https://jsonplaceholder.typicode.com/users/`,newContacts)
        //  .then(res =>  dispatch({type:'ADD_CONTACT', payload:newContacts}))
         .then();

         dispatch({type:'ADD_CONTACT', payload:res.data});

         Toastr.success('contact added');
 
         this.setState({
             name:'',
             email:'',
             errors:{}
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
                                {/* <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" placeholder="enter name" name="name"  onChange={ this.onInputChange} value={name} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" className="form-control" placeholder="enter email" name="email" onChange={this.onInputChange} value={email}/>
                                </div> */}

                                <button className="btn btn-block btn-light">Add</button>
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
