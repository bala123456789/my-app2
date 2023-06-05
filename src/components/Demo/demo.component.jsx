import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css'

import nn from '../../assets/images/Besant1.jpg'
class DemoComponent extends React.Component {
    
    render() {
        return (
            
            <nav class="navbar navbar-expand-sm navbar-light bg-dark">
 <div class="container-fluid">
    
            <img src={nn} height="50px" width="50px"></img>   
                            

                            <ul class="navbar-nav">
        <li class="nav-item">

        <a class="navbar-brand"></a>
                                <Link to="/menu1">Menu 1</Link></li>
                        
                            

                            <li class="nav-item">

                            <a class="navbar-brand"></a>
                                <Link to="/menu2">Menu 2</Link></li>
                            
                            <a class="navbar-brand"></a>

                            <li class="nav-item">

                            <a class="navbar-brand"></a>
                                <Link to="/menu3">Menu 3</Link></li>
                            </ul>
                        </div>
 
</nav>
        );
    }

}

export default DemoComponent;
