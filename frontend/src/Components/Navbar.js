
const Navbar = ({firstName}) => {   
  
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Teebay</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">My Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">All Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Buy-Sell History</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {firstName}
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/">Profile</a></li>
                            <li><a class="dropdown-item" href="/">Logout</a></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
