import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">TODO</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
          <li><Link to='/'></Link></li>
          <li><Link to='todo'>TODO</Link></li>
          <li><Link to='task'>TASK</Link></li>
          <li><Link to='calander'>CALANDER</Link></li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;