import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} from 'graphql';

import db from '../database/models';

let ImageType;

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  description: 'Portfolio\'s project',
  fields() {
    return {
      id: {
        type: GraphQLInt,
        resolve(project) {
          return project.id;
        },
      },
      title: {
        type: GraphQLString,
        resolve(project) {
          return project.title;
        },
      },
      description: {
        type: GraphQLString,
        resolve(project) {
          return project.description;
        },
      },
      cover: {
        type: GraphQLString,
        resolve(project) {
          return project.cover;
        },
      },
      images: {
        type: new GraphQLList(ImageType),
        resolve(project) {
          return project.getImages();
        },
      },
    };
  },
});

ImageType = new GraphQLObjectType({
  name: 'Image',
  description: "Project's images",
  fields() {
    return {
      id: {
        type: GraphQLInt,
        resolve(image) {
          return image.id;
        },
      },
      url: {
        type: GraphQLString,
        resolve(image) {
          return image.url;
        },
      },
      description: {
        type: GraphQLString,
        resolve(image) {
          return image.description;
        },
      },
      project: {
        type: ProjectType,
        resolve(image) {
          return image.getProject();
        },
      },
    };
  },
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => ({
    projects: {
      type: new GraphQLList(ProjectType),
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve(root, args) {
        return db.Project.findAll({ where: args });
      },
    },
    images: {
      type: new GraphQLList(ImageType),
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve(root, args) {
        return db.Image.findAll({ where: args });
      },
    },
  }),
});
const Schema = new GraphQLSchema({
  query: Query,
});

export default Schema;
