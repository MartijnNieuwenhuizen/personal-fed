# Manage dependencies for a function inside a map

I often put the functions within a map into separate files. They are there for reusability and easiness to test. This is very nice until you need additional data to function within the map.

Take the following example. You have two entities in your store, people and books. What if you want to show the first name of a person and all the titles of the books he has read. You would like to map over the people and combine the first name and all titles of the books he had read into a separate object.

A first approach would look something like this:

```
  const state = {
    people: [
      {
        id: "12345",
        firstName: "John",
        lastName: "Becker",
        booksRead: ['abc', '123', 'xy9']
      }
    ],
    books: {
      abc: {
        title: "The Hobbit",
        pages: 879,
      }
      123: {
        title: "Harry Potter",
        pages: 462,
      }
      xy9: {
        title: "The Da Vinci Code",
        pages: 597,
      }
    }
   }

  const people = state.people.map(person => addBookTitlesToPerson(person, state.books))
```

But this doesn't look nice to me. Another way is to retrieve the state in the file itself, but that would make testing harder and make is less configurable. Next to that, getting the state on a lot of locations could potentially decrease the performance of your app.

I also miss the option for configuration in both cases. Maybe you want to pass in the books a bit earlier or it makes more sense to do it in another location of your app. Luckily there is another way of doing this that is more functional oriented:

```
  // Same format as above
  const state = { ... }

  const people = state.people.map(addBookTitlesToPerson(state.books))

  // Or separated

  const addBookTitlesToPersonWithBooks = addBookTitlesToPerson(state.books)

  const people = state.people.map(addBookTitlesToPerson)
```

In that case, addBookTitlesToPerson.js would look something like this:

```
// addBookTitlesToPerson.js

export default (books) => (person) => {
  const bookTitlesRead = person.booksRead.map(bookId => books[bookId].title)

  return {
    ...person,
    bookTitlesRead
  }
}
```
