import React from "react";
import { Grid, Form,Button } from 'semantic-ui-react'
import "../css/page.css"

const Logo = require('../asset/logo.png')
const Rethink = require('../asset/Retink-avatar.png')

function Header() {
  return (
    <div className="header">
      <Grid>
            <Grid.Column width={10}>
            <div className="mainleft">
                <div className="row">
                <img className="logoimg" src={Logo} alt="logo"/>

                <div class="header-text">
                    <h2 class="htag">Get Advanced AI 
                        <div class="sub-heading">+ Expert Created<span>Logos</span></div>
                    </h2>
        
                    <p>Boost your sales <span>10x faster</span> with content customized by our <br></br> unique partnership
                        of <span>human creativity and AI optimization</span>
                    </p>
                </div>
                <div class="cta-form">
                    <h5 className="span">Sign Up For The BETA!</h5>
                    <div class="cta-contact-form">
                    <Form>
                        <Form.Group>
                        <Form.Field>
                        
                        <input style={{border:"none",borderBottom:"1px solid black"}} class="rehack" type="text" placeholder="Business name" />
                        </Form.Field>
                        would like a beta invite sent to
                        <Form.Field>
                        
                        <input style={{border:"none",borderBottom:"1px solid black"}} type="email" placeholder="'@email address" />
                        </Form.Field>
                        when it's ready!
                        </Form.Group>
                    </Form>
                    </div>
                    <div className="buttonregister">
                    <Button style={{borderRadius:"20px",marginRight:"5%"}}  size='big' color='violet'>Notify me</Button>
                    <Button style={{borderRadius:"20px"}}   size='big' basic color='violet' content='Sign up as a freelance partner' />
                    </div>
                </div>
                </div>
            </div>
            </Grid.Column>
            <Grid.Column width={5}>
                <div className="rethimg">
                <img  src={Rethink} alt="Rethink bg"/>
                </div>
            </Grid.Column>
    </Grid>
    </div>
  );
}

export default Header;