import React, { useState } from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox';

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


function AxiosApp() {
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
    <div className="AxiosApp" style={{background: 'steelblue'}}>
      <h1>Axios App</h1>
      <SearchBox getSearchText={handleSearchText} />
      <h3>User: {user.name}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  );
}

export default AxiosApp;
