import React from "react";
import { Link} from "react-router-dom";
    
function Navbar(){

    return(
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark" id="navbar">
        <div class="container-fluid">
            <ul className="navbar-nav">
              <li class="nav-item">
                <Link to={'/Counter'}>Counter</Link>
              </li>
              <li class="nav-item">
                <Link to={"/Todolist"}>Todolist</Link>
              </li>
              <li class="nav-item">
                <Link to={"/Countries"}>Countries</Link>
              </li>
              {/* <li class="nav-item">
                <Link to={"Airlines"}>Airlines</Link>
              </li> */}
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;