import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";
import React, { useState } from "react";
import Campaigns from "./components/Campaigns";
import { ICampaign } from "./types";
import { Grid } from "@mui/material";


function App() {
  const [campaigns, setCampaigns] = useState([
    {
      name: 'Campaign 1', 
      description: 'description foefkfmwefwef', 
      gameName: 'DOTA 2', 
      startDate: '2022-01-27', 
      endDate: '2022-01-29', 
      budget: 5000, 
      paidWithCrypto: false, 
      language: 'English'
    }, 
    {
      name: 'Campaign 2', 
      description: 'description foefkfmwefwef', 
      gameName: 'Minecraft', 
      startDate: '2022-02-27', 
      endDate: '2022-03-29', 
      budget: 5563, 
      paidWithCrypto: false, 
      language: 'Japanese'
    }
  ])
  const [showForm, setShowForm] = useState(false)
  const addCampaign = (campaign: ICampaign) => {
    setCampaigns([...campaigns, campaign])
  }
  const toggleForm = () => {
    setShowForm(!showForm)
  }
  return (
    <Grid container>
      <Header showForm={showForm} onClick={toggleForm}/>
      { showForm ? 
      <Form addCampaign={addCampaign} closeForm={toggleForm}/> : 
      ''
      }
      <Campaigns campaigns={campaigns}/>
      <Footer/>
    </Grid>
  );
}

export default App;
