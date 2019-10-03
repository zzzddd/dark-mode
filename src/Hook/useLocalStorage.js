import { useState } from "react";

// key value pairs -> set up state property
// capture the values
// if local data use that, else use initial data
// update localStorage when needed
// Don't forget to parse data from localStorage, and stringify new data getting stored

export const useLocalStorage = (key, initialValue) => {
  if (typeof key !== "string") {
    throw new Error(
      "Invalid Params: useLocalStorage should receive a string for the first argument"
    );
  }
  // To retrieve an item from localStorage, call localStorage.getItem('itemName')
// If that item doesn't exist, it will return undefined

  const [storedValue, setStoredValue] = useState(() => {
      // Get from local storage by key
    if (localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    } else {
        // Parse and return stored json or, if undefined, return initialValue
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const setValue = value => {
    // update storedValue state property
    setStoredValue(value);
    // update localStorage value
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
