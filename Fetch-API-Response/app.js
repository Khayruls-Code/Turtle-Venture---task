//fetching api response
const fetchData = async () => {
  const url = "https://gorest.co.in/public/v1/users";
  const token = 'd7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3'
  const res = await fetch(url, {
    headers: { Authentication: `Bearer ${token}` }
  })
  const data = await res.json()
  displaymeal(data.data)
}

fetchData()

//showing users on the web page
const displaymeal = (users) => {
  const container = document.getElementById('container')
  container.textContent = ''
  users.forEach(user => {
    let div = document.createElement('div')
    div.innerHTML = `
          <div class="card">
              <h1 class="name">${user?.name}</h1>
              <p class="email">${user?.email}</p>
              <p><b>Gender:</b> <span class="gender">${user?.gender}</span></p>
              <p><b>Status:</b><span class="status">${user?.status}</span></p>
          </div>
      `;
    container.appendChild(div)
  });
}