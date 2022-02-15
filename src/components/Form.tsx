import { Grid, Typography, FormGroup, FormControl, InputLabel, Input, Button, TextField, Select, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { IFormProps } from "../types";

const Form = (props: IFormProps) => {
    const addCampaign: Function = props.addCampaign; 
    const closeForm: ()=>void = props.closeForm;
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
        let month: string
        let monthNumber: number = today.getMonth() + 1
        if (monthNumber < 10) {
            month = '0' + monthNumber
        } else {
            month = monthNumber + ''
        }
        
        return today.getFullYear() + '-' + month + '-' + today.getDate()
    }

    const onSubmit = (e: any) => {
        console.log(typeof e);
        e.preventDefault()
        if(!name) {
            alert('Empty Name');
            return
        }
        if(!game) {
            alert('No game selected');
            return
        }
        if (game === 'Other' && !otherGame) {
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
        if (game === 'Other') {
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
        <Grid className="form">
            <Typography variant='h1' sx={{fontSize: 32}}>Add Campaign</Typography> 
            <FormGroup>
                <FormControl >
                    <InputLabel>Campaign Name:</InputLabel>
                    <br/>
                    <Input type='text' value={name} onChange={(e) => setName(e.target.value)}></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Description:</InputLabel>
                    <br/>
                    <TextField multiline minRows={10} maxRows={20} fullWidth={true} margin='dense' value={description} onChange={(e) => setDescription(e.target.value)}></TextField>
                </FormControl>
                <FormControl className="form-control">
                    <InputLabel >Game:</InputLabel>
                    <br/>
                    <Select label='Game' value={game} onChange={(e) => setGame(e.target.value)}>
                        <MenuItem value={'DOTA 2'}>DOTA 2</MenuItem>
                        <MenuItem value={'Minecraft'}>Minecraft</MenuItem>
                        <MenuItem value={'Fortnite'}>Fortnite</MenuItem>
                        <MenuItem value={'Apex Legends'}>Apex Legends</MenuItem>
                        <MenuItem value={'League of Legends'}>League of Legends</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>     
                </FormControl>
                <FormControl className="form-control">
                {game === 'Other'? <Input type='text' value={otherGame} onChange={(e) => setOtherGame(e.target.value)}></Input> : ''}
                </FormControl>
                <FormControl className="form-control">
                    <InputLabel>Start date:</InputLabel>
                    <br/>
                    <Input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)}></Input>
                </FormControl>
                <FormControl  className="form-control">
                    <InputLabel>End date:</InputLabel>
                    <Input type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)}></Input>
                </FormControl>
                <FormControl className="form-control">
                    <InputLabel>Budget: </InputLabel>
                    <Input type='number' value={budget} onChange={(e) => setBudget(parseInt(e.target.value))}></Input>
                </FormControl>
                <FormControl className="form-control">
                    <FormControlLabel label='Can be paid with Crypto currency' control={<Checkbox value={Number(paidWithCrypto)} checked={paidWithCrypto} onChange={(e) => setPaidWithCrypto(e.currentTarget.checked)}></Checkbox>}/>
                </FormControl>
                <FormControl className="form-control">
                    <InputLabel>Campaign Language: </InputLabel>
                    <Select label='Language' value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="German">German</MenuItem>
                        <MenuItem value="Spanish">Spanish</MenuItem>
                        <MenuItem value="Japanese">Japanese</MenuItem>
                    </Select>
                </FormControl>
                <FormControl  className="form-control">
                    <Input type='submit' value='Submit Campaign' className="btn" onClick={onSubmit}></Input>
                </FormControl>
            </FormGroup>
            <Button className="btn" style={{float: 'left'}} onClick={closeForm}>Close</Button>
        </Grid>
     );
}
 
export default Form;