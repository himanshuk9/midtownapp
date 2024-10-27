function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id='mynav'>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> <b> <span><i class="fa-solid fa-pepper-hot"></i></span>MID<span>TOWN</span></b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/"><b>Home</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/About"><b>About</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Menu"><b>Gallery</b></a>
                            </li>


                            {/* <li class="nav-item">
                                <a class="nav-link" href="/Sign"><b>Sign In</b> </a>
                            </li> */}


                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>Menu</b>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#"><b>Break-Fast</b></a></li>
                                    <li><a class="dropdown-item" href="#"><b>Lunch</b></a></li>
                                    <li><a class="dropdown-item" href="#"><b>Dinner</b></a></li>
                                </ul>
                            </li> */}

                            <li class="nav-item">
                                <a class="nav-link" href="/Contact"><b>Contact</b></a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/S"><b>Services</b></a>
                            </li>
                         
                        </ul>
                        <form class="d-flex">


                            <a class="navlink" href="/Sign"><i class="fa-solid fa-user"></i><b> SignIn</b> </a>

                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Navbar;