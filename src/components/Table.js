import React from 'react';

const Table = (props) => {
  return (
    <div class="table-responsive px-2 flux-table">
      <table class="table align-items-center table-flush">
        <thead class="thead-light">
          <tr>
            <th scope="col" class="sort" data-sort="name">Account</th>
            <th scope="col" class="sort" data-sort="budget">Balance</th>
            <th scope="col" class="sort" data-sort="status">Action</th>
            <th scope="col">Value</th>
            <th scope="col" class="sort" data-sort="completion">Address</th>
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
              <span class="badge badge-dot mr-4">
                <span class="status gain">GAIN</span>
              </span>
            </td>
            <td className="budget">
              0.4 ETH
            </td>
            <td>
              0xfcsdsdkf123kl1k2lj3k1ljasasddasdasdkasdasdkad...
            </td>
          </tr>

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
              <span class="badge badge-dot mr-4">
                <span class="status gain">GAIN</span>
              </span>
            </td>
            <td className="budget">
              0.4 ETH
            </td>
            <td>
              0xfcsdsdkf123kl1k2lj3k1ljasasddasdasdkasdasdkad...
            </td>
          </tr>


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
              <span class="badge badge-dot mr-4">
                <span class="status gain">GAIN</span>
              </span>
            </td>
            <td className="budget">
              0.4 ETH
            </td>
            <td>
              0xfcsdsdkf123kl1k2lj3k1ljasasddasdasdkasdasdkad...
            </td>
          </tr>

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
              <span class="badge badge-dot mr-4">
                <span class="status gain">GAIN</span>
              </span>
            </td>
            <td className="budget">
              0.4 ETH
            </td>
            <td>
              0xfcsdsdkf123kl1k2lj3k1ljasasddasdasdkasdasdkad...
            </td>
          </tr>


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
              <span class="badge badge-dot mr-4">
                <span class="status gain">GAIN</span>
              </span>
            </td>
            <td className="budget">
              0.4 ETH
            </td>
            <td>
              0xfcsdsdkf123kl1k2lj3k1ljasasddasdasdkasdasdkad...
            </td>
          </tr>






        </tbody>
      </table>
    </div>

  )
}

export default Table;