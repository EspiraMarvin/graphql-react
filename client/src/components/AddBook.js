import {graphql } from 'react-apollo'
import { getAuthorsQuery, addBookMutation } from "../queries/queries";
import { useState } from 'react'
import {flowRight as compose} from 'lodash'


const AddBook = (props) => {

    const [ title, setTitle ] = useState('');
    const [ genre, setGenre ] = useState('');
    const [ authorId, setAuthorId ] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      props.addBookMutation();
        // const book = { title, genre, authorId }
      // console.log(book)
    };

    const displayAuthors = () => {
        // console.log(props)
        let data = props.getAuthorsQuery;
        if (data.loading){
            return ( <option disabled>Loading authors...</option> )
        }else {
            return data.authors.map(author => {
              return (
                  <option key={author.id} value={author.id}>{ author.name }</option>
              )
            })
        }
    }

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input
                    type="text"
                    required
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
            </div>
            <div className="field">
                <label>Author:</label>
                <select
                    required
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                >
                    <option>Select author</option>
                    { displayAuthors() }
                </select>
            </div>
            <button>+</button>

        </form>
    )
};

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook)
