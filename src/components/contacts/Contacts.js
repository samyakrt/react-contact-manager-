import React, { Component,Fragment } from 'react';
import Contact from './Contact';
import {Consumer} from '../../Context';

export default class Contacts extends Component {

  
    render() {
        //equivalent to this.state.contacts
        // const {contacts} = this.state;

        return (
          <Consumer>
            {   
                (value) =>{
                const {contacts} = value;
                
                return(
                    <Fragment>
                        { contacts.map((contact)=>{
                            return <Contact key={contact.id} contact={contact} />
                        })}
                </Fragment>
                )
                }
            }
          </Consumer>
        )
    }
}
