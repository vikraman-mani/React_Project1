// class component

import React from 'react';
import { UserContext } from '../App';

class Footer extends React.Component {
    render() {
        
        return (
            <footer>
                <h1>Footer</h1>
                <UserContext.Consumer>
                    {
                        ( {user} ) => {
                             return (
                                <h3>{user.name}</h3>
                             )
                        }
                    }
                </UserContext.Consumer>
            </footer>
        )
    }
}

export default Footer;

// rcc 

// import React, { Component } from 'react'

// export default class Footer extends Component {
//   render() {
//     return (
//       <div>Footer</div>
//     )
//   }
// }
