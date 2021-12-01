import { useState } from "react"
import logo from './images/logo1.png'
import functions from './images/functions.png'
import profileImg from './images/profileImg.png'

function Search({onSubmit}) {

    const [searchTerm, setSearchTerm] = useState('')
    const handleChange = (e) => setSearchTerm(e.target.value)

    const keyPress = (e) =>{
        if(e.key === 'Enter'){
            onSubmit(searchTerm)
        }
    }

    return (
        <>
            <header className="header">
                <a href="/">
                    <img src={logo} alt="logo" className="logo" />
                </a>
                <input type="text" fullWidth placeholder="Search..." value={searchTerm} onChange={handleChange} onKeyPress={keyPress} />
                <div className="icons">
                    <img src={functions} alt="functions" className="functions" />
                </div>
                <a href="/" className="profile">
                    <img src={profileImg} alt="profileImg" />
                </a>
            </header>
        </>
    )
}

export default Search
