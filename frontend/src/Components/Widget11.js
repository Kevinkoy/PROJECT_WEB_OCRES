import {NotificationContainer,NotificationManager} from "react-light-notifications";
import "react-light-notifications/lib/main.css";
  
  const App = () => (
    <div>
      <button
        onClick={() => {
          NotificationManager.info({
            title: 'Information Title',
            message: 'Information message',
            onClick: () => {
              console.log('Clicked on the notification');
            }
          });
        }}
      >
        Info
      </button>
  
      <NotificationContainer />
    </div>
  );
  
  export default App;