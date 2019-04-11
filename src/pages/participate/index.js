import React from 'react'
import Layout from 'components/Layout/index'
import { Link } from 'gatsby'

const part = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">Participate</h1>
            <p>The Institute accepts as Fellows teachers of English, history, languages, arts, science, and mathematics from New Haven's public elementary and secondary schools. Interested teachers discuss their potential eligibility with a School Representative or a Steering Committee member who works closely with those teachers who then submit an online application. To learn more about participating in the Institute, speak with your School Representative or Contact, or a member of the Steering Committee. <Link to="brochures/A1/2019-YNHTI-Annual-Brochure.pdf">See our 2019 Annual Brochure.</Link></p>
       </div>
          <div className="row" />
    </main>
  </Layout>
)
export default part