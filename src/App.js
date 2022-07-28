import './App.css';
import Popup from './Popup'
import { useEffect, useState } from 'react'
var x = 0;
function App() {
  const [timedPopup, setTimedPopup] = useState(false);
  const sleep = ms => new Promise(r => setTimeout(r, ms));



  setTimeout(() => {
    setTimedPopup(true);
  }, x=x+0.125, 5000);
var rubynumber = 1000;
var add = 0;
var prev = 0;
if (Math.round(x)==1)
{
  add=1;
} else if (Math.round(x)==2)
{
  prev=1;
  add=2;
} else if (Math.round(x)==3)
{
  prev=3;
  add=3;
} else if (Math.round(x)==4)
{
  prev=6;
  add=5;
} else if (Math.round(x)==5)
{
  prev=11;
  add=8;
} else if (Math.round(x)==6)
{
  prev=19;
  add=13;
} else if (Math.round(x)==7)
{
  prev=32;
  add=20;
}
  rubynumber+=prev
  rubynumber+=add;

  console.log(x);
  return (
    
    <div className="App">
      
      <div className="AppHeaderBar">
        
      </div>
      <div className="PointIcon">
          
        </div>
        
        <div className="ruby-number">
         {rubynumber} 
          </div>
        <div className="Rectangle468">
          <img src={require("./Rectangle468.png")} />
        </div>
        <div className="TextSearch">
        <img src={require("./SearchAnything.png")} />
        </div>
        <div className="SearchVector">
        <img src={require("./SearchVector.png")} />
        </div>
        <div className="Line">
        <img src={require("./Line.png")} />
        </div>
        <div className="NewLogo">
        <img src={require("./NewLogo.png")} />
        </div>
        <div className="New">
        <img src={require("./NEW.png")} />
        </div>
        <div className="HotLogo">
        <img src={require("./HotLogo.png")} />
        </div>
        <div className="Hot">
        <img src={require("./HOT.png")} />
        </div>
        <div className="JoinedLogo">
        <img src={require("./JoinedLogo.png")} />
        </div>
        <div className="Joined">
        <img src={require("./Joined.png")} />
        </div>
        <div className="SavedLogo">
        <img src={require("./SavedLogo.png")} />
        </div>
        <div className="Saved">
        <img src={require("./Saved.png")} />
        </div>
        <div className="NotificationLogo">
        <img src={require("./NotificationLogo.png")} />
        </div>
        <div className="Notification">
        <img src={require("./Notification.png")} />
        </div>
        <div className="CreateRound">
        <img src={require("./CreateRound.png")} />
        </div>
        <div className="CRPostLogo">
        <img src={require("./CRPostLogo.png")} />
        </div>
        <div className="CreatePost">
        <img src={require("./CreatePost.png")} />
        </div>
        <div className="CRPostPic">
        <img src={require("./CRPostPic.png")} />
        </div>
        <div className="RectPopCom">
        <img src={require("./RectPopCom.png")} />
        </div>
        <div className="PopCom">
        <img src={require("./PopCom.png")} />
        </div>
        <div className="LinePopCom">
        <img src={require("./LineShort.png")} />
        </div>
        <div className="ComList">
        <img src={require("./ComList.png")} />
        </div>
        <div className="LBoardRect">
        <img src={require("./LBoardRect.png")} />
        </div>
        <div className="Leaderboard">
        <img src={require("./Leaderboard.png")} />
        </div>
        <div className="LBoardTrophy">
        <img src={require("./LBoardTrophy.png")} />
        </div>
        <div className="LBoardLine1">
        <img src={require("./LineShort.png")} />
        </div>
        <div className="JohnDoe1">
        <img src={require("./JohnDoe.png")} />
        </div>
        <div className="MedalGold">
        <img src={require("./MedalGold.png")} />
        </div>
        <div className="TimeLong">
        <img src={require("./TimeLong.png")} />
        </div>
        <div className="TimeMedium">
        <img src={require("./TimeMedium.png")} />
        </div>
        <div className="TimeShort">
        <img src={require("./TimeShort.png")} />
        </div>
        <div className="JohnDoe2">
        <img src={require("./JohnDoe.png")} />
        </div>
        <div className="JohnDoe3">
        <img src={require("./JohnDoe.png")} />
        </div>
        <div className="LBoardLine2">
        <img src={require("./LineShort.png")} />
        </div>
        <div className="LBoardLine3">
        <img src={require("./LineShort.png")} />
        </div>
        <div className="LBoardLine4">
        <img src={require("./LineShort.png")} />
        </div>
        <div className="MedalSilver">
        <img src={require("./MedalSilver.png")} />
        </div>
        <div className="MedalBronze">
        <img src={require("./MedalBronze.png")} />
        </div>
        <div className="RectDM">
        <img src={require("./RectDM.png")} />
        </div>
        <div className="DM">
        <img src={require("./DM.png")} />
        </div>
        <div className="DMArrow">
        <img src={require("./DMArrow.png")} />
        </div>
        <div className="PostRect1">
        <img src={require("./PostRect.png")} />
        </div>
        <div className="PostRect2">
        <img src={require("./PostRect.png")} />
        </div>
        <div className="PostRect3">
        <img src={require("./PostRect.png")} />
        </div>
        <div className="PostUpvote1">
        <img src={require("./PostUpvote.png")} />
        </div>
        <div className="PostDownvote1">
        <img src={require("./PostDownvote.png")} />
        </div>
        <div className="PostUpvote2">
        <img src={require("./PostUpvote.png")} />
        </div>
        <div className="PostUpvote3">
        <img src={require("./PostUpvote.png")} />
        </div>
        <div className="PostDownvote2">
        <img src={require("./PostDownvote.png")} />
        </div>
        <div className="PostDownvote3">
        <img src={require("./PostDownvote.png")} />
        </div>
        <div className="Extracurriculars">
        Extracurriculars
        </div>
        <div className="PostedBy">
        Posted by Sharon Mitchell
        </div>
        <div className="StudentGreen">
        <img src={require("./StudentGreen.png")} />
        </div>
        <div className="StudentText">
        Student
        </div>
        <div className="TimeAgo">
          5 minutes ago
        </div>
        <div className="PostContent">
        Can anyone give me any tips on how to be a better softball player?
        </div>
        <div className="ReplyLogo">
        <img src={require("./ReplyLogo.png")} />
        </div>
        <div className="Reply">
          Reply
        </div>
        <div className="RepostLogo">
        <img src={require("./RepostLogo.png")} />
        </div>
        <div className="Repost">
          Repost
        </div>
        <div className="SaveLogo">
        <img src={require("./SaveLogo.png")} />
        </div>
        <div className="Save">
          Save
        </div>
        <div className="SendLogo">
        <img src={require("./SendLogo.png")} />
        </div>
        <div className="Send">
          Send
        </div>
        <div className="ReplyLogo2">
        <img src={require("./ReplyLogo.png")} />
        </div>
        <div className="Reply2">
          Reply
        </div>
        <div className="RepostLogo2">
        <img src={require("./RepostLogo.png")} />
        </div>
        <div className="Repost2">
          Repost
        </div>
        <div className="SaveLogo2">
        <img src={require("./SaveLogo.png")} />
        </div>
        <div className="Save2">
          Save
        </div>
        <div className="SendLogo2">
        <img src={require("./SendLogo.png")} />
        </div>
        <div className="Send2">
          Send
        </div>
        <div className="ReplyLogo3">
        <img src={require("./ReplyLogo.png")} />
        </div>
        <div className="Reply3">
          Reply
        </div>
        <div className="RepostLogo3">
        <img src={require("./RepostLogo.png")} />
        </div>
        <div className="Repost3">
          Repost
        </div>
        <div className="SaveLogo3">
        <img src={require("./SaveLogo.png")} />
        </div>
        <div className="Save3">
          Save
        </div>
        <div className="SendLogo3">
        <img src={require("./SendLogo.png")} />
        </div>
        <div className="Send3">
          Send
        </div>
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <h1 className="textcenter"><u>Daily Login</u></h1>
        <h3><img className="rubypopupsquare" src={require("./Popupsquare.png")} /></h3>
        <h3><img className="rubypopup" src={require("./rubypopup.png")} /></h3>
        <h3 className="rubynumber1">{Math.round(add)}</h3>
        <h3 className="day1">Day {Math.round(x)}</h3>
      </Popup>
    </div>
  );
}

export default App;