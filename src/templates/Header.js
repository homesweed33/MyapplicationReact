import React from 'react'

export default function header() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <a href="index.html" class="navbar-brand" >Metaverse</a>
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarToggle">
                    <soan class="nabar-toggler-icon"></soan>
                </button>
                <div class="navbar-nav me-auto">
                    <a class="nav-link active" arin-current="page" href="#">Product</a>
                </div>
            </div>
            <div class="collapse navbar-collapse" id="navbarToggle">
                <ol class="navbar-nav">
                    <li class="navbar-nav"><a href="#" class="nav-link" data-bs-target="#showForm" data-bs-toggle="modal">Sign in</a></li>
                    <li class="navbar-nav active" ari-current="page">/</li>
                    <li class="navbar-nav"><a href="register.html" class="nav-link">
                        Sign up
                        </a></li>
                    <form class="d-flex">
                        <input type="text" class="form-control" placeholder="ค้นหาข้อมูล"></input>
                        <input type="submit" value="ค้นหา" class="btn btn-outline-dark"></input>
                    </form>
                </ol>
            </div>
        </nav>
    </div>
  )
}
