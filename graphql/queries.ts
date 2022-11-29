import { gql } from '@apollo/client';
import client from './index';
import { AllProjectsListQuery, AllProjectsListQueryVariables } from 'graphql/types';

const PROJECT_DATA_FRAGMENT = gql`
  fragment Project on ProjectRecord {
    id
    githubRepo
    description
    livePreview
    name
    techStack
    main
  }
`;

export const ALL_PROJECTS_LIST_QUERY = gql`
  ${PROJECT_DATA_FRAGMENT}
  query AllProjectsList {
    allProjects {
      ...Project
    }
  }
`;

export const fetchAllProjects = () => client.query<AllProjectsListQuery, AllProjectsListQueryVariables>({ query: ALL_PROJECTS_LIST_QUERY });
