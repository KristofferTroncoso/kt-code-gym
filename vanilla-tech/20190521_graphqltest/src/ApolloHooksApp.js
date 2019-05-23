import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import SearchBox from './components/SearchBox';

const GET_CURRENT_USER = gql`
  query GetUser($user: String = "kristoffertroncoso") {
    user(login:$user) {
      name
      email
    }
  }
`;

function ApolloHooksApp() {
  const [text, changeSearchText] = React.useState();
  const {loading, data} = useQuery(GET_CURRENT_USER, {variables: {user: text}});
  const handleSearchText = searchText => {
    changeSearchText(searchText);
  };
  const {user} = data;
  return (
    <div className="ApolloHooksApp" style={{background: 'dodgerblue'}}>
      <h1>Apollo Hooks App</h1>
      <p>Using the beta @apollo/react-hooks package</p>
      <SearchBox getSearchText={handleSearchText} />
      {loading 
        ?
          <><h1>loading</h1></>
        :
          <>
            <h3>User: {user.name}</h3>
            <h3>Email: {user.email}</h3>
          </>
      }
    </div>
  )
}

export default ApolloHooksApp;