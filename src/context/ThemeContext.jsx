import React, {createContext,useState,useEffect} from 'react'

const ThemeContext = createContext() //bilgiyi tutan

const themes ={
  light: {
    backgroundColor:"bg-light",
    color: "text-dark",
    button: "btn-primary",
    navbar: "navbar-light bg-light"
  },
  dark: {
    backgroundColor:"bg-dark",
    color: "text-light",
    button: "btn-danger",
    navbar: "navbar-dark bg-dark"
  }
}



function ThemeContextProvider(props){ //bilgiyi sağlayan

  const [themeName,setThemeName] = useState("light")

  useEffect( ()=>{
    const theme = themeName==="light" ? themes.light : themes.dark;
    document.body.classList.add(theme.backgroundColor,theme.color)
    

  },[]) //sayfa ilk açıldığında

  useEffect( ()=>{
    const theme = themeName==="light" ? themes.light : themes.dark;
    document.body.className="";
    document.body.classList.add(theme.backgroundColor,theme.color)
    

  },[themeName])



  return(
    <ThemeContext.Provider value={{theme: themeName==="light" ? themes.light : themes.dark, 
    setThemeName,
    themeName
    }}
    >
      {props.children}


    </ThemeContext.Provider>
      
  )
}

export {ThemeContext,ThemeContextProvider}