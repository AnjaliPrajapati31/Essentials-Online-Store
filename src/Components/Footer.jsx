import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
const Wrapper=styled.section`
 .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;
  return (
   <Wrapper>
    <section className="contact-short">
        <div className="grid grid-two-column">
            <div>
                <h3>Ready to get started</h3>
                <h3>Talk to us today</h3>
            </div>
            <div>
                <Button>Get Started</Button>
            </div>
        </div>
    </section>
    <footer>
        <div className="container grid grid-four-column">
            <div className="footer-about">
                <h3>Essentials Online Store</h3>
                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid vero provident numquam quaerat dolores a.</h3>
            </div>
            <div className="footer-subsribe">
                <h3>Subsribe to get more updates</h3>
                <form action="#">
                    <input type="email" placeholder='Your email'/>
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
            <div className="footer-social">
                <h3>Follow us </h3>
                <div className="footer-social--icons">
                    <div>
                        <FaDiscord className='icons'></FaDiscord>
                    </div>
                    <div>
                        <FaInstagram className='icons'></FaInstagram>
                    </div>
                    <div>
                        <a href="https://youtube.com/@anjaliprajapati1522?si=3W4vyQ1vVwBmlmeN"><FaYoutube className='icons'></FaYoutube></a>
                    </div>

                </div>
                </div>
                  <div className="footer-contact">
              <h3>Call Us</h3>
              <h3><a href="tel:9136781221">+91 12345678978</a></h3>
            </div>
          </div>
          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column">
                <p>
                    @{new Date().getFullYear()}Essentials Online Store.All rights reserved.
                </p>
                 <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
    </footer>
   </Wrapper>
  )
}

export default Footer