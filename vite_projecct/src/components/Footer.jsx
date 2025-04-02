// class component

import React from 'react';

class Footer extends React.Component {
    render() {

        console.log(this.props);
        
        return (
            <footer>
                <h1>Footer</h1>
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
