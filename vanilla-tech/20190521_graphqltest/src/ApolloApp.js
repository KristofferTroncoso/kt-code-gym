import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import SearchBox from './components/SearchBox';

const GET_CURRENT_USER = gql`
  query GetUser($user: String = "kristoffertroncoso") {
    user(login:$user) {
      name
      email
    }
  }
`;



function ApolloApp() {
  const [text, changeSearchText] = React.useState();
  const handleSearchText = searchText => {
    changeSearchText(searchText);
  }
  return (
    <div className="ApolloApp" style={{background: 'deeppink'}}>
      <h1>Apollo App</h1>
      <SearchBox getSearchText={handleSearchText} />
      <Query 
        query={GET_CURRENT_USER}
        variables={{"user": text}}
      >
        {({ data }) => {
          const { user } = data;

          if (!user) return null;
      
          return (
            <div>
              <h3>User: {user.name}</h3>
              <h3>Email: {user.email}</h3>
            </div>
          );
        }}
      </Query>
    </div>
  )
}


export default ApolloApp;