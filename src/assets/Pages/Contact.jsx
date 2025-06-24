import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  const Wrapper=styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction:column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className='common-heading'>Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9514.651852110463!2d72.84561683029335!3d19.29507345096074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b19c562b3b19%3A0x6a03f8b31cdd7995!2sMaxus%20Mall!5e0!3m2!1sen!2sin!4v1750157198752!5m2!1sen!2sin" width="100%" height="350" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/meoklgjl" method="POST" className="contact-inputs">
            <input type="text" placeholder='Enter your username' name="Username" required autoComplete='off'/>
             <input type="email" placeholder='Enter your Email' name="Email" required autoComplete='off' />         
            <textarea type="text" placeholder='Write your message here' name="Message" required autoComplete='off' rows={10} cols={90}/>
            <input type="submit" value="send"/>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact