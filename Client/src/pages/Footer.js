import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';





const Footer = () => {
  return (
    <div>
        <MDBFooter className='text-center' color='dark' bgColor='dark'>
      <MDBContainer className='p-4'>
        

     
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Get in touch A4 Network</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
                <MDBInput contrast type='text' label='comments' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <div className='rmoooo'> <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Submit
                </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </form>
       

      
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#122b2b' }}>
        © 2020 Copyright:- 
        <a className='text-white'>
              A4  Network
        </a>
      </div>
    </MDBFooter>

    </div>
  )
}

export default Footer
