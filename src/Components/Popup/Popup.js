import './Popup.css'
import Board from './board'
import './style.css'

function Popup(props) {

  return (props.trigger) ? (
    <div className="popup">
        
        <div className="popup-inner">
          
            <button onClick={() => props.setTrigger(false)} className="close-btn">Exit</button>
            
            { props.children }
            <div className="App" id='main'>
        <Board></Board>
    </div>  

    
        </div>

        


    </div>
  ) : "";
}

export default Popup 