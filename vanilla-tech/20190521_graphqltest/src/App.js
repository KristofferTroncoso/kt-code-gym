import React, { useState } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

const getUser = (searchText) =>  `
  {
    user(login:"${searchText}") {
      name
      email
    }
  }
`;


function App() {
  const [user, changeUser] = useState({
    name: '',
    email: ''
  })

  const fetchUserFromGithub = (user) => {
    axiosGitHubGraphQL
    .post('', { query: getUser(user) })
    .then(result => {
      changeUser({
        name: result.data.data.user.name,
        email: result.data.data.user.email
      })
    });
  }

  const handleSearchText = searchText => {
    fetchUserFromGithub(searchText);
  }

  return (
    <div className="App">
      <SearchBox getSearchText={handleSearchText} />
      <h1>User: {user.name}</h1>
      <h1>Email: {user.email}</h1>
    </div>
  );
}

export default App;
