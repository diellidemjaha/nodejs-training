import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mini Blog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/about'>About</Link>
        <Link className='nav-link' to='/blog1'>Blog 1</Link>
        <Link className='nav-link' to='/blog2'>Blog 2</Link>
      
      </div>
    </div>
  </div>
</nav>
    );
}

export default Navbar;