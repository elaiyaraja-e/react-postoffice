/**
 * copyright 2019 (C) ELAIYA
 * 
 * created on: May 12, 2019
 * @author: Elaiya Raja E
 * 
 * ---------------------------------------------------------
 * Revision History (Release 1.0.0)
 * ---------------------------------------------------------
 * VERSION | AUTHOR - DATE       | DESCRIPTION OF CHANGE
 * --------------------------------------------------------- 
 * 1.0     | ELAIYA - 12-05-2019 | Inital Creation
 * ---------------------------------------------------------
 * 
 */

//Library Files
import React, { Component } from 'react'

export default class PostofficeTemplate extends Component {
  render = () =>{
    return (
      <div class="ui justified container">
        {this.props.children}
      </div>
    )
  }
}
