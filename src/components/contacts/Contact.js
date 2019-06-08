/* eslint-disable react/no-typos */
import React, { Component } from 'react'
import propTypes from 'prop-types';
import {Consumer} from '../../Context';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../../style.css';

 class Contact extends Component {
    
    state = {
        showContactInfo:true,
    }
     toggleInfo = (e) => {
           this.setState({
               showContactInfo:!this.state.showContactInfo,
           });

    }

    deleteContact = async (id,dispatch)=>{

        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        // .then(res => dispatch({type:'DELETE_CONTACT',payload:id}))
         
        dispatch({type:'DELETE_CONTACT',payload:id});
    }
    
    render() {
        const {id,name,email,number} = this.props.contact;
        let {showContactInfo} = this.state;
        return (
        <Consumer>
            {
                value =>{
                    return(
                        <div className="card card-body mb-3">
                            <h4>{name} 
                                <i className="fas fa-angle-down" onClick={this.toggleInfo}></i> 
                                <i className="fas fa-times" style={{color:'red',cursor:'pointer',float:'right'}} onClick={()=>this.deleteContact(id,value.dispatch)}></i>
                            </h4>

                            {showContactInfo? (
                                <ul className="list-group">
                                    <li className="list-group-item">Email:{email}</li>
                                    <li className="list-group-item">Number:{number}</li>
                                </ul>
                            ):('')}
                            <Link to={`/contact/${id}/edit`} className="btn btn-sm btn-success">Edit</Link>
                        </div>
                    )
                }
            }
        </Consumer>
        )
    }
}

 Contact.propTypes ={
   contact:propTypes.object.isRequired,
   
};

export default Contact;