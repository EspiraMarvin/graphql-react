const graphql = require('graphql');
//lodash
const _ = require('lodash');

const {GraphQLObjectType,GraphQLString,GraphQLSchema, GraphQLID, GraphQLInt} = graphql;

// dummy data
var books = [
    {name: "Name of the Wind", genre: "Fantasy", id: "1", authorId:'1'},
    {name: "The Final empire", genre: "Fantasy", id: "2", authorId:'2'},
    {name: "The long earth", genre: "Sci-Fi", id: "3", authorId:'3'}
];

var authors = [
    {name: "Patrick Rothfuss", age: 44, id: "1"},
    {name: "Brandon Sanderson", age: 42, id: "2"},
    {name: "Terry Pratchett", age: 66, id: "3"}
];

//book type
const BookType = new GraphQLObjectType({
   name: 'Book',
   fields: () => ({
       id: { type: GraphQLID},
       name: {type: GraphQLString},
       genre: {type: GraphQLString},
       author: {
           type: AuthorType,
           resolve(parent, args){
               console.log(parent)
               return _.find(authors,{id: parent.authorId})
           }
       }
   })
});

// author type
const AuthorType = new GraphQLObjectType({
   name: 'Author',
   fields: () => ({
       id: { type: GraphQLID},
       name: { type: GraphQLString},
       age: { type: GraphQLInt}
   })
});

// root query (how we initially jump into the graph to query data)
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        book:{
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                // code to get data from db/other sources
                console.log(typeof(args.id));
                return _.find(books, {id:args.id});
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return _.find(authors, {id:args.id});
            }
        }
    }
});


module.exports = new GraphQLSchema({
   query: RootQuery
});