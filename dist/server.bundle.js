/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _expressGraphql = __webpack_require__(2);

	var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

	var _schema = __webpack_require__(3);

	var _schema2 = _interopRequireDefault(_schema);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();
	app.set('port', process.env.PORT || 3001);
	// serve static assets in production
	if (process.env.NODE_ENV === 'production') {
	  app.use(_express2.default.static('client/build'));
	}

	// graphQL
	var shouldUseGraphiql = process.env.NODE_ENV !== 'production';
	app.use('/graphql', (0, _expressGraphql2.default)({
	  schema: _schema2.default,
	  graphiql: shouldUseGraphiql
	}));

	app.listen(app.get('port'), function () {
	  console.log('App listening on port ' + app.get('port') + '!'); //eslint-disable-line
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("/home/luis/Documents/Projects/express-react-postgresql/node_modules/express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("/home/luis/Documents/Projects/express-react-postgresql/node_modules/express-graphql");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _graphql = __webpack_require__(4);

	var _models = __webpack_require__(5);

	var _models2 = _interopRequireDefault(_models);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// eslint-disable-line

	var ImageType = void 0;

	var ProjectType = new _graphql.GraphQLObjectType({
	  name: 'Project',
	  description: 'Portfolio\'s project',
	  fields: function fields() {
	    return {
	      id: {
	        type: _graphql.GraphQLInt,
	        resolve: function resolve(project) {
	          return project.id;
	        }
	      },
	      title: {
	        type: _graphql.GraphQLString,
	        resolve: function resolve(project) {
	          return project.title;
	        }
	      },
	      description: {
	        type: _graphql.GraphQLString,
	        resolve: function resolve(project) {
	          return project.description;
	        }
	      },
	      cover: {
	        type: _graphql.GraphQLString,
	        resolve: function resolve(project) {
	          return project.cover;
	        }
	      },
	      images: {
	        type: new _graphql.GraphQLList(ImageType),
	        resolve: function resolve(project) {
	          return project.getImages();
	        }
	      }
	    };
	  }
	});

	ImageType = new _graphql.GraphQLObjectType({
	  name: 'Image',
	  description: "Project's images",
	  fields: function fields() {
	    return {
	      id: {
	        type: _graphql.GraphQLInt,
	        resolve: function resolve(image) {
	          return image.id;
	        }
	      },
	      url: {
	        type: _graphql.GraphQLString,
	        resolve: function resolve(image) {
	          return image.url;
	        }
	      },
	      description: {
	        type: _graphql.GraphQLString,
	        resolve: function resolve(image) {
	          return image.description;
	        }
	      },
	      project: {
	        type: ProjectType,
	        resolve: function resolve(image) {
	          return image.getProject();
	        }
	      }
	    };
	  }
	});

	var Query = new _graphql.GraphQLObjectType({
	  name: 'Query',
	  description: 'Root query object',
	  fields: function fields() {
	    return {
	      projects: {
	        type: new _graphql.GraphQLList(ProjectType),
	        args: {
	          id: {
	            type: _graphql.GraphQLInt
	          }
	        },
	        resolve: function resolve(root, args) {
	          return _models2.default.Project.findAll({ where: args });
	        }
	      },
	      images: {
	        type: new _graphql.GraphQLList(ImageType),
	        args: {
	          id: {
	            type: _graphql.GraphQLInt
	          }
	        },
	        resolve: function resolve(root, args) {
	          return _models2.default.Image.findAll({ where: args });
	        }
	      }
	    };
	  }
	});
	var Schema = new _graphql.GraphQLSchema({
	  query: Query
	});

	exports.default = Schema;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("/home/luis/Documents/Projects/express-react-postgresql/node_modules/graphql");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("/home/luis/Documents/Projects/express-react-postgresql/server/database/models");

/***/ }
/******/ ]);