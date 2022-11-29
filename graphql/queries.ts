import { gql } from '@apollo/client';
import client from './index';
import { MainProjectListQuery, MainProjectListQueryVariables, SideProjectListQuery, SideProjectListQueryVariables } from './types';

const PROJECT_DATA_FRAGMENT = gql`
  fragment Project on ProjectRecord {
    id
    githubRepo
    description
    livePreview
    name
    photos {
      id
      url
      alt
      blurUpThumb(quality: 10)
    }
    techStack
  }
`;

export const MAIN_PROJECT_LIST_QUERY = gql`
  ${PROJECT_DATA_FRAGMENT}
  query MainProjectList {
    allProjects(filter: { main: { eq: "true" } }) {
      ...Project
    }
  }
`;

export const SIDE_PROJECT_LIST_QUERY = gql`
  ${PROJECT_DATA_FRAGMENT}
  query SideProjectList {
    allProjects(filter: { main: { eq: "false" } }) {
      ...Project
    }
  }
`;

export const fetchMainProjects = () =>
  client.query<MainProjectListQuery, MainProjectListQueryVariables>({
    query: MAIN_PROJECT_LIST_QUERY,
  });

export const fetchSideProjects = () =>
  client.query<SideProjectListQuery, SideProjectListQueryVariables>({
    query: SIDE_PROJECT_LIST_QUERY,
  });
