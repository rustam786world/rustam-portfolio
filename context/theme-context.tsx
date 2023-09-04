// // "use client"; 
  
// //  import React, { useEffect, useState, createContext, useContext } from "react"; 
  
// //  type Theme = "light" | "dark"; 
  
// //  type ThemeContextProviderProps = { 
// //    children: React.ReactNode; 
// //  }; 
  
// //  type ThemeContextType = { 
// //    theme: Theme; 
// //    toggleTheme: () => void; 
// //  }; 
  
// //  const ThemeContext = createContext<ThemeContextType | null>(null); 
  
// //  export default function ThemeContextProvider({ 
// //    children, 
// //  }: ThemeContextProviderProps) { 
// //    const [theme, setTheme] = useState<Theme>("dark"); 
  
// //    const toggleTheme = () => { 
// //      if (theme === "dark") { 
// //        setTheme("light"); 
// //        window.localStorage.setItem("theme", "light"); 
// //        document.documentElement.classList.add("light"); 
// //      } else { 
// //        setTheme("dark"); 
// //        window.localStorage.setItem("theme", "dark"); 
// //        document.documentElement.classList.add("dark"); 
// //      } 
// //     //  if (theme === "dark") {
// //     //   document.documentElement.classList.add("dark");
// //     //  }
// //     //  else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
// //     //  setTheme("dark");
// //     //  document.documentElement.classList.add("dark");
// //     //  }

// //    }; 
  
// //    useEffect(() => { 
// //      const localTheme = window.localStorage.getItem("theme") as Theme | null; 
  
// //      if (localTheme) { 
// //        setTheme(localTheme); 
  
// //        if (localTheme === "dark") { 
// //          document.documentElement.classList.add("dark"); 
// //        } 
// //      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) { 
// //        setTheme("dark"); 
// //        document.documentElement.classList.add("dark"); 
// //      } 
// //      if (localTheme === "light") { 
// //       document.documentElement.classList.add("light"); 
// //     } 
// //     else if (window.matchMedia("(prefers-color-scheme: light)").matches) { 
// //     setTheme("light"); 
// //     document.documentElement.classList.add("light"); 
// //     } 
// //    }, []); 
  
// //    return ( 
// //      <ThemeContext.Provider 
// //        value={{ 
// //          theme, 
// //          toggleTheme, 
// //        }} 
// //      > 
// //        {children} 
// //      </ThemeContext.Provider> 
// //    ); 
// //  } 
  
// //  export function useTheme() { 
// //    const context = useContext(ThemeContext); 
  
// //    if (context === null) { 
// //      throw new Error("useTheme must be used within a ThemeContextProvider"); 
// //    } 
  
// //    return context; 
// //  }

// "use client";

// import React, { useEffect, useState, createContext, useContext } from "react";

// type Theme = "light" | "dark";

// type ThemeContextProviderProps = {
//   children: React.ReactNode;
// };

// type ThemeContextType = {
//   theme: Theme;
//   toggleTheme: () => void;
// };

// const ThemeContext = createContext<ThemeContextType | null>(null);

// export default function ThemeContextProvider({
//   children,
// }: ThemeContextProviderProps) {
//   const [theme, setTheme] = useState<Theme>("light");

//   const toggleTheme = () => {
//     if (theme === "dark") {
//       setTheme("light");
//       window.localStorage.setItem("theme", "light");
//       document.documentElement.classList.remove("dark");
//       document.documentElement.classList.add("light");
//     } else {
//       setTheme("dark");
//       window.localStorage.setItem("theme", "dark");
//       document.documentElement.classList.remove("light");
//       document.documentElement.classList.add("dark");
//     }
//   };

//   useEffect(() => {
//     const localTheme = window.localStorage.getItem("theme") as Theme | null;

//     if (localTheme) {
//       setTheme(localTheme);
//     } else if (
//       window.matchMedia("(prefers-color-scheme: dark)").matches &&
//       localTheme !== "light"
//     ) {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   }, []);

//   return (
//     <ThemeContext.Provider
//       value={{
//         theme,
//         toggleTheme,
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);

//   if (context === null) {
//     throw new Error("useTheme must be used within a ThemeContextProvider");
//   }

//   return context;
// }

"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
    } else if (
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      localTheme !== "light"
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    // Invert colors when changing themes
    if (theme === "dark") {
      invertColors();
    }
  }, [theme]);

  const invertColors = () => {
    const elementsToInvert = document.querySelectorAll(
      "body, .inverted-color"
    );
    // elementsToInvert.forEach((element) => {
    //   element.style.filter = "invert(1)";
    // });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}

