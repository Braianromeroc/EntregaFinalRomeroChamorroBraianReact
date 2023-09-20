import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-success sticky-top mb-4">
                <div class="container-fluid">
                    <Link className="navbar-brand" to={"/"}>Ecommerce</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/category/recientes"}>Recientes</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" to={"/category/variedad"}>Variedad</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" to={"/category/clasicos"}>Clasicos</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#"><CartWidget/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;