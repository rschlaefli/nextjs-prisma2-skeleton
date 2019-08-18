import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const ALL_USERS_QUERY = gql`
  query {
    users {
      email
    }
  }
`

function Home() {
  const { data, error, loading } = useQuery(ALL_USERS_QUERY)

  if (loading) {
    return null
  }

  if (error) {
    return null
  }

  return data.users.map(user => <div>{user.email}</div>)
}

export default Home
