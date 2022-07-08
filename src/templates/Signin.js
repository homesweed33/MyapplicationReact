import React from 'react'

function Signin() {
  return (
    <div>
        <div class="modal" id="showForm">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Login</h5>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="exampleInputUserName1" class="form-label">UserName</label>
                        <input type="username" class="form-control" id="exapleInputUserName"></input>
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a  href="#">Create Address</a></li>
                            <li class="breadcrumb-item"><a href="#">Forgot password</a></li>
                        </ol>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-success">Login</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signin