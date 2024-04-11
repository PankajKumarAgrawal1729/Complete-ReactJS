import React from 'react'

// context is a way to pass data through the component tree without having to pass props down manually at every level.
// In a typical React application, data is passed top-down (parent to child) via props, but 
// Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. 
// Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
// Context lets us pass a value deep into the component tree without explicitly threading it through every component. 
// Create a context for the current authenticated user.

// Context is a provides values, so it gives us a Provider


const UserContext = React.createContext();

export default UserContext;