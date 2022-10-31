import React from "react";
import { Grid, Card,Form,Button } from 'semantic-ui-react'

// video declaration
// const myVideo = require()
// image declaration
const ai = require('../asset/artificial-intelligence.png')
const upload = require('../asset/Group.png')
const info = require('../asset/Vector.png')
const recandrev = require('../asset/direct-customer.png')
const publish = require('../asset/publish.png')

const logos = require('../asset/log.png')
const blogwrit = require('../asset/bw.png')
const animatedvid = require('../asset/av.png')
const productdem = require('../asset/pd.png')
const copywrit = require('../asset/cw.png')
const socialads = require('../asset/sads.png')

function Explainer() {
  return (
    <div className="explainersection">
      <h1 className="colored">Explainer Video</h1>
      <div>
      <video width="750" height="500" controls >
      <source src="" type="video/mp4"/>
     </video>
      </div>
      <div className="cardspace">
      <Grid divided='vertically'>
            <Grid.Row columns={3}>
            <Grid.Column>
            <Card style={{height:"100%",boxShadow: '4px 4px 8px 3px rgba(0, 0, 0, 0.1)',borderRadius:"20px"}}>
             
            <Card.Content>
            <img className="cardimg"  src={ai} alt="Card one" />
            <Card.Header>MakeAI-assisted Content Choices</Card.Header>
        
            <Card.Description style={{textAlign:"left"}}>
            Access and Order from an extensive catalogue in any language and on your budget’s terms. If unsure, our AI guides you to the best.
            </Card.Description>
            </Card.Content>
           
            </Card>
            </Grid.Column>
            <Grid.Column>
            <Card style={{height:"100%",boxShadow: '4px 4px 8px 3px rgba(0, 0, 0, 0.1)',borderRadius:"20px"}}>
             
             <Card.Content>
             <img className="cardimg"  src={upload} alt="Card Two" />
             <Card.Header>Upload and Maintain your Brand Identity</Card.Header>
         
             <Card.Description style={{textAlign:"left"}}>
             Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!
             </Card.Description>
             </Card.Content>
            
             </Card>
            </Grid.Column>
            <Grid.Column>
            <Card style={{height:"100%",boxShadow: '4px 4px 8px 3px rgba(0, 0, 0, 0.1)',borderRadius:"20px"}}>
             
             <Card.Content>
             <img className="cardimg"  src={info} alt="Card Three" />
             <Card.Header>Be informed as we create</Card.Header>
         
             <Card.Description style={{textAlign:"left"}}>
             Your details are translated and sent to the AI, <span className="colordesc">FP</span>, or both (per your choice) as you relax and receive continuous updates.
             </Card.Description>
             </Card.Content>
            
             </Card>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <div className="bottomcard">
        <Grid divided='vertically'>
            <Grid.Row columns={2}>
            <Grid.Column>
            <Card style={{boxShadow: '4px 4px 8px 3px rgba(0, 0, 0, 0.1)',borderRadius:"20px",height:"100%"}}>
             
             <Card.Content>
             <img className="cardimg"  src={recandrev} alt="Card Fout" />
             <Card.Header>Receive and Review</Card.Header>
         
             <Card.Description style={{textAlign:"left"}}>
             The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.             </Card.Description>
             </Card.Content>
            
             </Card>
            </Grid.Column>
            <Grid.Column>
            <Card style={{boxShadow: '4px 4px 8px 3px rgba(0, 0, 0, 0.1)',borderRadius:"20px",height:"100%"}}>
             
             <Card.Content>
             <img className="cardimg"  src={publish} alt="Card Five" />
             <Card.Header>Publish and Monitor your contents’ progress</Card.Header>
         
             <Card.Description style={{textAlign:"left"}}>
             The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.             </Card.Description>
             </Card.Content>
            
             </Card>
            </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
        <div className="morespace">
      <h2 className="colored">Transform your Creation Process</h2>
            <p>With a new approach toordering content, you can now stop juggling multiple <br /> 
                documents and meetings and start publishing content faster and on demand
            </p>
      </div>
      <div className="morespace">
      <h2 className="colored">Activate your business growth with RetinkContent. </h2>
            <p>Save time and maintain your brand identity within your budget range or <br /> sign 
                up for affordable plans and still access multiple content services like:
            </p>
      </div>

      <div className="cardspace">
      <Grid divided='vertically'>
            <Grid.Row columns={3}>
            <Grid.Column>
            <img className="imgretrak" src={logos} alt="logos" />
            <div className="pointace">
                <p className="ace">Logos<div className="aceline"></div></p>
                <p className="acesub">Have a unique & creative logo designed to express and represent your brand identity.</p>
            </div>
            
            </Grid.Column>
            <Grid.Column>
            <img className="imgretrak" src={blogwrit} alt="blog" />
            <div className="pointace">
                <p className="ace">Blog Writing <div className="aceline"></div></p>
                <p className="acesub"> Write SEO enriched blog posts as long or short articles on any topic of your choice .</p>
            </div>
            </Grid.Column>
            <Grid.Column>
            <img className="imgretrak" src={animatedvid} alt="animated" />
            <div className="pointace">
                <p className="ace">Animated Videos <div className="aceline"></div></p>
                <p className="acesub"> Bring animated characters to life to keep your viewers engaged and  entertained.</p>
            </div>
            </Grid.Column>
            </Grid.Row>
        </Grid>
     <div className="imgboxtwo">
     <Grid divided='vertically'>
            <Grid.Row columns={3}>
            <Grid.Column>
            <img className="imgretrak" src={productdem} alt="product demo" />
            <div className="pointace">
                <p className="ace">Product Demo <div className="aceline"></div></p>
                <p className="acesub">Introduce your product to potential customers in a clear and creative video.
</p>
            </div>
            </Grid.Column>
            <Grid.Column>
            <img className="imgretrak" src={copywrit} alt="copywriting" />
            <div >
                <p className="ace">Copywriting <div className="aceline"></div></p>
                <p className="acesub"> Write SEO enriched blog posts as long or short articles on any topic of your choice .</p>
            </div>
            </Grid.Column>
            <Grid.Column>
            <img className="imgretrak" src={socialads} alt="ads" />
            <div className="pointace">
                <p className="ace">Socila Media Ads <div className="aceline"></div></p>
                <p className="acesub"> Boost sales and awareness with tailor made ads from experts.
</p>
            </div>
            </Grid.Column>
            </Grid.Row>
        </Grid>
     </div>
      
      </div>
      <div className="morespace">
        <h2  className="coloredsmall">Sign Up For The BETA to see more</h2>
       <div className="formspace">
                 <Form>
                        <Form.Group>
                        <Form.Field>
                        
                        <input style={{textAlign:"center",borderRadius:"20px",padding:"1.5rem",border:"1px solid #7E1CFE"}}  type="text" placeholder="Business name" />
                        </Form.Field>

                        <Form.Field>
                        
                        <input style={{padding:"1.5rem",textAlign:"center",borderRadius:"20px",border:"1px solid #7E1CFE"}} type="email" placeholder="Email" />
                        </Form.Field>
                      
                        </Form.Group>
                    </Form>
       </div>
       <div className="movebtn">
                    <Button style={{borderRadius:"20px"}}  size='big' color='violet'>Notify me</Button>
                
                </div>
                <div>
                <Button style={{borderRadius:"20px"}}   size='big' basic color='violet' content='Sign up as a freelance partner' />
                </div>
      </div>
    
      </div>
     
    </div>
  );
}

export default Explainer;