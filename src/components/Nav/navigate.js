import React from 'react'



const Navigate = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="https://www.google.com">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="https://www.google.com"id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Projects
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="https://www.google.com">Color Flip</a>
                            
                                </div>
                            </li>
                        
                        </ul> 
                    </div>
            </nav>
        </div>
    )
}
export default Navigate;