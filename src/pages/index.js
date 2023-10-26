import * as React from "react"
import { Link } from "gatsby"
import '@fontsource/rubik'
import styled from "styled-components"
import './styles.css'
import { StaticImage } from "gatsby-plugin-image"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Helmet } from "react-helmet"

// const CalendlyWidget = () => (
//   <div dangerouslySetInnerHTML={{ __html: require('../static/calendly.html') }} />
// );

export const LogoStyled = styled.div`
    font-size: 46px;
    font-family: "Rubik", "sans-serif";
    color: black;
    padding: 8px;
    justify-self: center;
`
export const Logo = () =>{
  return <LogoStyled><b>&lt;H</b><span style={{color: 'rgb(223, 123, 30)'}}>old</span><b>TML/&gt;</b></LogoStyled>
}

const IndexPage = () => {
  return (
    <main>

      <section className="headline">
        <Logo className="logo-head"></Logo>
        <h1>Web Design Package for Bars and Restaurants</h1>


        <div className="whats_the_catch">
          <div className="catch_CTA">

            <h2>No Cost? =&gt;</h2>

            <div className="scarecity">
            <p>We have limited slots for this offer, and we work with only one client at a time, so if you're interested, contact us soon to reserve your spot</p>
              <button onClick={()=> scrollTo("#calendly")} className="redeem_btn">Im interested</button>
            </div>
          </div>
          
          <div className="catch_list">
            <h3>Yes, there is no cost for this offer as long as you are willing to</h3>
              <ul className='catch_list_wrapper'>
                <li className="catch_list_item">Give us honest reviews and testimonials of your experience</li>
                <li className="catch_list_item">Fill out a form to help us improve our service</li>
                <li className="catch_list_item">Refer someone who is interested in our services if you are satisfied</li>
              </ul>
          </div>
        </div>
      </section>

      <div className="line-break"/>
      
      <section className="solution">
        <div className="solution_webdev">
          <div className="title-wrapper">
            <h2>Websites built with <Link target='_blank' to='https://gatsbyjs.com'>Gatsby</Link></h2>
            <StaticImage src="../images/icon.png" className="gatsby-logo" alt="gatsby logo"></StaticImage>
          </div>

          <div className="paragraph-wrapper solution-block">
            <StaticImage src="../images/ssg-host-flow.png" className="code-img" alt="code editor, with gatsby code"></StaticImage>
            <p>Our pages operate on a static generation model, making them extremely fast and optimized</p>
          </div>

          <div className='insights-wrapper solution-block'>
            <p>We verify optimization and speed with <Link target="_blac" to='https://pagespeed.web.dev'>google page speed insights</Link></p>
            <StaticImage src="../images/google-pagespeed-insights-logo" className="insights-logo" alt="page speed insights example"></StaticImage>
          </div>
        </div>

        <div className="mail-prismic-wrapper">

          <div className="solution_prismic solution-block">
            <StaticImage src="../images/prismic-logo.png" className="prismic-img" alt="logo prismic"></StaticImage>
            <p>We implement <Link to="https://prismic.io" target="_blank">Prismic</Link> on our sites so you can edit site content without the need to learn programming</p>
          </div>

          <div className="solution_email solution-block">
            <p>Keep your customers updated on your offers with email marketing to keep them eager to return regularly</p>
            <StaticImage src="../images/mailerlite-logo" className="email-img" alt="logo email"></StaticImage>
          </div>

        </div>

        <div className="solution_GMB solution-block">
          <StaticImage src="../images/google-my-business-logo" className='gmb-img' ></StaticImage>
          <p>Optimize your Google My Business (GMB) profile to enhance local searches</p>
        </div>
      </section>

      <div className="line-break"/>

      <section className="audience">
       <h3>Who is this service for?</h3>
        <p>Our service is ideal for bars and restaurants in Concepción and San Pedro de la Paz</p>
        <div className="map-imbed" dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12773.719717687067!2d-73.07352979325164!3d-36.83217824284281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbares!5e0!3m2!1ses-419!2scl!4v1697406203709!5m2!1ses-419!2scl" width="100%" height="560" style="border: 0; border-radius: 14px; box-shadow: rgba(2, 1, 0, 0.14) 0px 1px 41px 2px; margin-bottom: 10px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' }} />
      </section>

      <section className="identity">
        <StaticImage src="../images/carnet-pic.jpeg" className="benjamin-img" ></StaticImage>
        <p>I am Benjamin Astudillo, a young entrepreneur and web developer with over 2 years of study and practice to improve my services</p>
      </section>
  
      <section id="calendly">
        <h2>Schedule a hassle-free video call to discuss your interest in our service</h2>
        <Helmet>
          <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        </Helmet>
        <div id="calendly-imbed">
          <div class="calendly-inline-widget" data-url="https://calendly.com/holdtml-benjamin/reunion-inicial?primary_color=df7b1e" style={{ minWidth: '320px', height: '700px', width: '100%', margin: ' 0px 0px 120px 0px', padding: '0px' }}></div>
        </div>
      </section>
  
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
