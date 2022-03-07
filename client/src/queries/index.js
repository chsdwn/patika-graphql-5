import { gql } from '@apollo/client'

export const CREATE_EVENT = gql`
  mutation createEvent(
    $title: String!
    $desc: String
    $date: String
    $location_id: ID!
    $user_id: ID!
  ) {
    createEvent(data: {
      title: $title
      desc: $desc
      date: $date
      location_id: $location_id
      user_id: $user_id
    }) {
      id
    }
  }
`

const EventFragment = gql`
  fragment EventFragment on Event {
    id
    title
    desc
    date
  }
`

const ParticipantFragment = gql`
  fragment ParticipantFragment on Participant {
    user {
      username
    }
  }
`

export const GET_EVENT = gql`
  query getEvent($id: ID!) {
    event(id: $id) {
      ...EventFragment
      location {
        name
      }
      user {
        username
        email
      }
      participants {
        ...ParticipantFragment
      }
    }
  }
  ${EventFragment}
  ${ParticipantFragment}
`

export const GET_EVENTS = gql`
  query getEvents {
    events {
      ...EventFragment
    }
  }
  ${EventFragment}
`

export const EVENT_CREATED = gql`
  subscription {
    eventCreated {
      ...EventFragment
    }
  }
  ${EventFragment}
`

export const PARTICIPANT_ADDED = gql`
  subscription participantAdded($event_id: ID) {
    participantAdded(event_id: $event_id) {
      ...ParticipantFragment
    }
  }
  ${ParticipantFragment}
`
