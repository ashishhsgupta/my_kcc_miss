import { Dropdown } from 'bootstrap'
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../globalContext/GlobalContext.jsx'
import { LANG_OPTIONS_LIST } from './GlobalLanguage.jsx'
import { STATIC_LANG_DATA } from './StaticLangData.jsx'

const ChangeLang = () => {
    const [showDropdown, setShowDropDown] = useState(false)
    const {setCurrentLang, currentLang} = useContext(GlobalContext)

    useEffect(()=>{
        const savedLang = sessionStorage.getItem('currentLang') || 'en'
        document.documentElement.lang = savedLang;
        document.body.classList.add(savedLang)
        setCurrentLang(savedLang)
    },[])

    const onLangChange = (selectedLang) => {
     document.body.classList.remove("en","hi")
     setCurrentLang(selectedLang)
     sessionStorage.setItem('currentlang', selectedLang)
     document.documentElement.lang = selectedLang;
     document.body.classList.add(selectedLang);
    }
   
    const renderLangList = () =>{
        return LANG_OPTIONS_LIST.map(({displayValue, value})=>(
            <Dropdown.Item as='div' eventkey={value} key={value} lang={value}>
                {displayValue}
            </Dropdown.Item>
        ))
    }
  return (
    <div className='lang-dropdown'>
      <Dropdown  show={showDropdown}
        onToggle={isOpen => setShowDropdown(isOpen)}
        drop='down'
        as='div'
        role='button' className=""
        onSelect={onLangChange}>
        <Dropdown.Toggle className='' 
          as='div'
          role='button'>
          <div>
            {LANG_STATIC_DATA.language[currentLang]}:{currentLang.toUpperCase()}
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>{renderLangList()}</Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default ChangeLang;
