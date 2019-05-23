import React, { useState } from 'react';
import SearchBox from './components/SearchBox';

const getUserQuery = (searchText) =>  `
  query {
    user(login:"${searchText}") {
      name
      email
    }
  }
`;

const url = "https://api.github.com/graphql";
const bearer = 'bearer ' + process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

function FetchApp() {
  const [user, changeUser] = useState({
    name: '',
    email: ''
  })

  const fetchUserFromGithub = (user) => {
    const opts = {
      method: "POST",
      headers: { 
        'Authorization': bearer,
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({query: getUserQuery(user)})
    };
    fetch(url, opts)
    .then(res => res.json())
    .then(data => {
      changeUser({
        name: data.data.user.name,
        email: data.data.user.email
      })
    })
    .catch(err => console.log(err));
  }

  const handleSearchText = searchText => {
    fetchUserFromGithub(searchText);
  }

  return (
    <div className="FetchApp" style={{background: 'tomato'}}>
      <h1>Fetch App</h1>
      <SearchBox getSearchText={handleSearchText} />
      <h3>User: {user.name}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  );
}

export default FetchApp;
