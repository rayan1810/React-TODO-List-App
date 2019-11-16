import React from 'react';
import {Link} from 'react-router-dom';
export default function Link1(){
    return(<div>
            <Link to ="/" ><button>Home</button></Link>
            <Link to ="/todos" ><button>Todo</button></Link>
            <Link to ="/about" ><button>About Us</button></Link>
            </div>
        );
}
