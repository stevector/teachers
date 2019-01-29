import React from 'react'
import Layout from 'components/Layout/index'
import { Link } from 'gatsby'

const conPage = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">Endowment</h1>
        <p>
          At the completion of endowment challenge grants awarded in l990 by the
          DeWitt Wallace-Reader's Digest Fund and in 1991 by the National
          Endowment for the Humanities, the Yale-New Haven Teachers Institute
          became the first permanently endowed program of its type.
        </p>
        <div className="row mt-4">
          <div className="col-sm-11 left-panel">
            <ul>
              <li>
                <strong>
                  <Link to="brochures/A2.html/F14a">...and for New Haven</Link>
                </strong>
                <p>
                  A brochure describes the initiative to meet the endowment
                  challenge grants awarded to the Institute.
                </p>
              </li>
              <li>
                <strong>
                  <Link to="transcripts/f16">
                    A Celebration of the Teachers Institute: Completing the
                    Challenges, 1995{' '}
                  </Link>
                </strong>
                <p>
                  In December 1995 the Institute held a Celebration to mark the
                  completion of endowment challenge grants awarded in 1990 by
                  the DeWitt Wallace-Reader’s Digest Fund and in 1991 by the
                  National Endowment for the Humanities. A{' '}
                  <Link to="transcripts/f16">transcript</Link> and{' '}
                  <a href="https://www.youtube.com/watch?v=Bjvu_HAW1HY">
                    Video
                  </a>{' '}
                  are available of the remarks made by the President of Yale
                  University, President of The DeWitt Wallace-Reader’s Digest
                  Fund, Chairman of the National Endowment for the Humanities,
                  Superintendent of the New Haven Public Schools, and Mayor of
                  the City of New Haven.
                </p>
              </li>
              <li>
                <strong>
                  <Link to="transcripts/F14a">
                    Celebration of the Permanence and Promise of the Teachers
                    Institute, 1991{' '}
                  </Link>
                </strong>
                <p>
                  At this event, representatives of the DeWitt Wallace-Reader’s
                  Digest Fund and the National Endowment for the Humanities
                  announced the challenge grants they had made for the permanent
                  endowment of the Yale-New Haven Teachers Institute. The
                  President of Yale referred to the effort to meet these
                  challenge grants as “an important institutional priority of
                  mine to try to see that this magnificent collaboration,
                  resting on so many years of dedicated work and experience,
                  would become a permanent part” of the Yale-New Haven
                  partnership.
                </p>
              </li>
            </ul>
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default conPage
