import React from "react";
import { Grid,Icon } from 'semantic-ui-react'

const Logo = require('../asset/logo.png')
function Footer() {
  return (
    <div className="footer">
        <div className="firstbox">
        <Grid>
   
      <Grid.Column width={4}>
       <div className="footergray">
       <img className="logoimg" src={Logo} alt="logo"/>
       <h2>Product by Retink Media UG</h2>
       <h2>Bonn, Germany</h2>
       </div>
      </Grid.Column>
      <Grid.Column width={4}>
        <div className="footergraytwin">
            <h2>Get Early Acess</h2>
            <h2>Provide Feedback</h2>
        </div>
      </Grid.Column>
      <Grid.Column width={8}>
        <div className="footergraymedia">
            <h2>Connect With Us</h2>
            <div className="media">
                <div style={{marginRight:"5%"}}>
                <Icon link circular inverted color='blue' name='facebook f' />
                </div>
                <div style={{marginRight:"5%"}}>
                <Icon link color="blue" size='big' name='twitter' />
                </div>
                <div style={{marginRight:"5%"}}>
                <Icon link color="pink" size='big' name='instagram' />
                </div>
                <div style={{marginRight:"5%"}}>
                <Icon link color='blue' size='big' name='linkedin square' />
                </div>
                <div style={{marginRight:"5%"}}>
                <Icon link color='red' size='big' name='youtube' />
                </div>
                <div style={{marginRight:"5%"}}>
                <Icon link color='red' circular inverted name='pinterest' />
                </div>
            
            
            
            </div>
        </div>
      </Grid.Column>
   
  </Grid>
        </div>
        <div className="secbox">
        <Grid >
      <Grid.Column width={4}>
        <div className="footerblack">
        <h3>Copyright © 2021 Retink</h3>
        </div>
     
      </Grid.Column>
      <Grid.Column width={10}>
        <div className="footerblacktwin">
        <h3 className="policy">Privacy Policy</h3>
        <h3>Terms of Service</h3>
        </div>
      </Grid.Column>
    </Grid>
        </div>
      
    </div>
  );
}

export default Footer;