// import { useLocalStorage } from "./useLocalStorage";

// export const useInput = (key, initialValue) => {
//   const [value, setValue] = useLocalStorage(key, initialValue);

//   const handleChanges = e => {
//     setValue(e.target.value);
//   };

//   return [value, handleChanges, setValue];
// };

// // useForm
// // Stretch replace useInput with useForm
  
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = initialValue => {
  const [darkMode, setDarkMode] = useLocalStorage("darkModeKey", initialValue);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);//prevent every time effect

  return [darkMode, setDarkMode];
};