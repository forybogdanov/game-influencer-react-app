import { useState } from "react";
const Form = ({addCampaign, closeForm}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [game, setGame] = useState('')
    const [otherGame, setOtherGame] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [budget, setBudget] = useState(0)
    const [paidWithCrypto, setPaidWithCrypto] = useState(false)
    const [language, setLanguage] = useState('')

    function getCurrentDate() {
        let today = new Date()
        let month = today.getMonth()+1
        if (month < 10) { 
            month = '0' + month
        }
        return today.getFullYear() + '-' + month + '-' + today.getDate()
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name) {
            alert('Empty Name');
            return
        }
        if(!game) {
            alert('No game selected');
            return
        }
        if (game == 'Other' && !otherGame) {
            alert('No game selected');
            return
        }
        if(!description) {
            alert('No description');
            return
        }
        if(!startDate) {
            alert('No start date');
            return
        }
        const currentDate = getCurrentDate()
        if(startDate < currentDate) {
            alert('Start date should be a further day');
            return
        }
        if(!endDate) {
            alert('No end date');
            return
        }
        if(!language) {
            alert('No language selected');
            return
        }
        if (startDate > endDate) {
            alert('Invalid dates');
            return
        }
        if (budget < 0 || budget > 10000) {
            alert('Invalid budget');
            return
        }
        let gameName = game;
        if (game == 'Other') {
            gameName = otherGame
        }
        addCampaign({name, description, gameName, startDate, endDate, budget, paidWithCrypto, language})
        closeForm()
        setName('')
        setGame('')
        setDescription('')
        setStartDate('')
        setEndDate('')
        setBudget(0)
        setPaidWithCrypto(false)
        setLanguage('')
    }
    return ( 
        <div className="form">
            <h1>Add Campaign</h1> 
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Campaign Name:</label>
                    <br/>
                    <input type='text' maxLength={20} value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label>Description:</label>
                    <br/>
                    <textarea maxLength={200} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-control">
                    <label>Game:</label>
                    <br/>
                    <select value={game} onChange={(e) => setGame(e.target.value)}>
                        {game ? '' : <option>select game</option>}
                        <option>DOTA 2</option>
                        <option>Minecraft</option>
                        <option>Fortnite</option>
                        <option>Apex Legends</option>
                        <option>League of Legends</option>
                        <option>Other</option>
                    </select>
                    {game == 'Other'? <input type='text' value={otherGame} onChange={(e) => setOtherGame(e.target.value)}></input> : ''}
                </div>
                <div className="form-control">
                    <label>Start and end date:</label>
                    <br/>
                    <input type='date' min={Date()} value={startDate} onChange={(e) => setStartDate(e.target.value)}></input>
                    <input type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label>Budget: </label>
                    <input type='number' min={0} max={10000} value={budget} onChange={(e) => setBudget(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label>Can be paid with Crypto currency: </label>
                    <input type='checkbox' value={paidWithCrypto} checked={paidWithCrypto} onChange={(e) => setPaidWithCrypto(e.currentTarget.checked)}></input>
                </div>
                <div className="form-control">
                    <label>Campaign Language: </label>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                        {language ? '' : <option>select language</option>}
                        <option>English</option>
                        <option>German</option>
                        <option>Spanish</option>
                        <option>Japanese</option>
                    </select>
                </div>
                <input type='submit' value='Submit Campaign' className="btn"></input>
            </form>
            <button className="btn" style={{float: 'left'}} onClick={closeForm}>Close</button>
        </div>
     );
}
 
export default Form;