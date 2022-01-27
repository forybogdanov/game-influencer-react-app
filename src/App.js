import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import Campaigns from "./components/Campaigns";

function App() {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Campaign 1', 
      description: 'description foefkfmwefwef', 
      game: 'DOTA 2', 
      startDate: '2022-01-27', 
      endDate: '2022-01-29', 
      budget: 5000, 
      paidWithCrypto: false, 
      language: 'English'
    }, 
    {
      id: 2,
      name: 'Campaign 2', 
      description: 'description foefkfmwefwef', 
      game: 'Minecraft', 
      startDate: '2022-02-27', 
      endDate: '2022-03-29', 
      budget: 5563, 
      paidWithCrypto: false, 
      language: 'Japanese'
    }
  ])
  const [showForm, setShowForm] = useState(false)
  const addCampaign = (campaign) => {
    const id = campaigns.length + 1;
    const newCampaign = {id, ...campaign}
    setCampaigns([...campaigns, newCampaign])
  }
  const toggleForm = () => {
    setShowForm(!showForm)
  }
  const onClickHeader = () => {
    setShowForm(true)
  }
  return (
    <div>
      <Header showForm={showForm} onClick={toggleForm}/>
      { showForm ? 
      <Form addCampaign={addCampaign} closeForm={toggleForm}/> : 
      ''
      }
      <Campaigns campaigns={campaigns}/>
      <Footer/>
    </div>
  );
}

export default App;
