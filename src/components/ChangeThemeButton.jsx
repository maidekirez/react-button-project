import React,{useContext} from 'react';
import ThemeContext from "../context/ThemeContext"

function ChangeThemeButton(props){
  const {setThemeName,theme ,themeName} = useContext(ThemeContext);

  return(
    <button className={`btn  ${theme.button}`} onClick={()=> 
    setThemeName((prev) => (prev ==='light' ? 'dark': 'light') )
    }>
      Change Theme - {`${themeName}`}
      </button>
  )
}

export default ChangeThemeButton