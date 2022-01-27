const Header = ({showForm, onClick}) => {
    return ( 
        <div className="header">
        <h1>Game Influencer</h1>
        <button className="btn" onClick={onClick}>{showForm ? 'Close' : 'Add Campaign' }</button>
        </div>
     );
}
 
export default Header;