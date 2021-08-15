import React, { ReactElement } from 'react';
import Layout from '../../components/Layout';
import { learningReadBookData, fictionReadBookData, learningToReadBookData, fictionToReadBookData, ToReadInterface, ReadInterface } from '../../../public/data/bookData';


//this page will be the books I've read from fiction and selfhelp in 2 column table things
//Hope to add that the one's I've read will pull up modal cards when clicked with all their details

function Reading() {

  const createToReadList = (data: ToReadInterface[]): ReactElement => {
    return (
      <>
        <h3>Books to Read</h3>
        <ul>
          {
            data.map((book) => 
              <li>
                {book.title + " by " + book.author} 
              </li>
            )
          }
        </ul>
      </>
    );
  }

  const createReadList = (data: ReadInterface[]): ReactElement => {
    return (
      <>
        <h3>Books I've Read</h3>
        <ul>
          {
            data.map((book) => 
              <li>
                {book.title + " by " + book.author} 
              </li>
            )
          }
        </ul>
      </>
    );
  }

  return (
    <Layout>
      <div>
        <h2>Learning</h2>
        <div className={"hobbies-book-column-seperator"}>
          <div>{createToReadList(learningToReadBookData)}</div>
          <div>{createReadList(learningReadBookData)}</div>
        </div>
      </div>
      <div>
        <h2>Fiction</h2>
        <div className={"hobbies-book-column-seperator"}>
          <div>{createToReadList(fictionToReadBookData)}</div>
          <div>{createReadList(fictionReadBookData)}</div>
        </div>
      </div>     

    </Layout>
  );
}

export default Reading;