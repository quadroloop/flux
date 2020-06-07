import React, { useState } from 'react'




const Tabs = () => {

  const [currentTab, setcurrentTab] = useState('account')

  const AddAccount = () => {
    return (
      <div className="tab d-flex justify-content-center">
        <div className="small py-3">
          <h3>Add a new account</h3>
          <small className="text-muted">Provide the information below to and click the 'Add' button.</small>
          <input className="form-control my-2" placeholder="Account Name" />
          <input className="form-control mb-3" placeholder="Account Address" />
          <button className="btn btn-primary float-right">Add</button>
        </div>
      </div>
    )
  }

  const Account = () => {
    return (
      <div className="tab">
        <div className="small py-3">
          <h3>List of Accounts</h3>
          <div class="table-responsive px-2 flux-table">
            <table class="table align-items-center table-flush">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Balance</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list">

                <tr>
                  <th scope="row">
                    <div class="media align-items-center">
                      <a href="/delta" class="avatar avatar-sm rounded-circle mr-3">
                        <img alt="user-x" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1815&fit=crop&crop=faces" />
                      </a>
                      <div class="media-body">
                        <span class="name mb-0 text-sm">Bryce Mercines</span>
                      </div>
                    </div>
                  </th>
                  <td class="budget">
                    0.3 ETH
              </td>
                  <td>
                    0xfcsdsdkf123kl1k2lj3k1ljasasddasdasdkasdasdkad...
            </td>

                  <td>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>


              </tbody>
            </table>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div class="tabs py-3">
      <div className="tab-nav">
        <span
          onClick={() => { setcurrentTab("account") }}
          className={currentTab === "account" ? "active" : ""}
        >
          Accounts
        </span>
        <span
          onClick={() => { setcurrentTab("addaccount") }}
          className={currentTab === "addaccount" ? "active" : ""}
        >
          Add an account
        </span>
      </div>

      <br />
      <br />

      {currentTab === "account" ? (<Account />) : ""}
      {currentTab === "addaccount" ? (<AddAccount />) : ""}






    </div>
  )
}

export default Tabs;