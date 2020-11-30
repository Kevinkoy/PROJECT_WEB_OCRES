import React from "react";
import { Row } from "react-grid-system";
import {NotificationContainer,NotificationManager} from "react-light-notifications";
import "./Widget11_main.css/main.css";
  
class Widget11 extends React.Component{

  render(){

      return(
        <div >

        
          <Row>
            
        <button
          style={{marginLeft:"10px", color:'#fff', textTransform:"uppercase", textDecoration:'none', backgroundColor:'rgb(128,128,128)', borderRadius:'5px', display:'inline-block', border:'none', transition: "all 0.4 ease 0s", padding:'32px 26px', position:"relative"}}
          onClick={() => {
            NotificationManager.info({
              title: 'Info',
              message: 'Demain vous avez cours à 8h30 avec Mme Maillard <3',
              onClick: () => {
                console.log('Clicked on the notification');
              }
            });
            
          }}
        >
          Info
        </button>
        <button
        style={{marginLeft:"40px", color:'#fff', textTransform:"uppercase", textDecoration:'none', backgroundColor:'rgb(128,128,128)', borderRadius:'5px', display:'inline-block', border:'none', transition: "all 0.4 ease 0s", padding:'32px 16px', position:"relative"}}
        onClick={() => {
          NotificationManager.success({
            title: 'Recette',
            message: 'Sushi',
            onClick: () => {
              console.log('Clicked on the notification');
            }
          });
          
        }}
        >
          Recette
        </button>
        </Row>
        <br/>
        <Row>
        <button
        style={{marginLeft:"10px", color:'#fff', textTransform:"uppercase", textDecoration:'none', backgroundColor:'rgb(128,128,128)', borderRadius:'5px', display:'inline-block', border:'none', transition: "all 0.4 ease 0s", padding:'32px 15px', position:'relative'}}
        onClick={() => {
          NotificationManager.error({
            title: 'Phrase inspiration',
            message: '«Les détails font la perfection et la perfection ne est pas un détail.» Léonard de Vinci',
            onClick: () => {
              console.log('Clicked on the notification');
            }
          });
          
        }}
        >
          Phrase
        </button>
        
        <button
        style={{marginLeft:"39px", color:'#fff', textTransform:"uppercase", textDecoration:'none', backgroundColor:'rgb(128,128,128)', borderRadius:'5px', display:'inline-block', border:'none', transition: "all 0.4 ease 0s", padding:'32px 22px', position:"relative"}}
        onClick={() => {
          NotificationManager.warning({
            title: 'Devoir',
            message: 'Tu dois faire ton Tp de Web',
            onClick: () => {
              console.log('Clicked on the notification');
            }
          });
          
        }}
        >
          Devoir
        </button>
        </Row>
        
        <NotificationContainer/>
        
      </div>
      );
    }
}

    
  export default Widget11;