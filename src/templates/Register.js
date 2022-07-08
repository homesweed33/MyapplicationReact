import React from 'react'

function Register() {
  return (
    <div>
        <div class="container">
        <div class="rom">
            <div class="col bg-primary m-5">
                <div class="card rounded mx-auto d-block">
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputUserName1" class="form-label">UserName</label>
                                <input type="username" class="form-control" id="exapleInputUserName"></input>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Create Address</button>
                            <a href="#" class="ms-5" data-bs-target="#showForm" data-bs-toggle="modal">Login</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register