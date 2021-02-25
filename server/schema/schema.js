 const graphql = require('graphql');
//lodash
const _ = require('lodash');
const Book = require('./models/book');
const Author = require('./models/author');

const {GraphQLObjectType,GraphQLString,GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList} = graphql;


// author type
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        age: { type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                // return _.filter(books, { authorId: parent.id})
            }
        }
    })
});


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
               // return _.find(authors,{id: parent.authorId})
           }
       }
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
                // return _.find(books, {id:args.id});
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                // return _.find(authors, {id:args.id});
            }
        },
        //get all books
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                // return books
            }
        },
        //get all authors
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent,args){
                // return authors
            }
        }
    }
});


module.exports = new GraphQLSchema({
   query: RootQuery
});
