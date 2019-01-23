import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    const { location, title } = this.props
    return (
      <navbar-collapse isOpen={!this.state.collapsed} navbar>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleNavbar}
            data-toggle="collapsed"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={
              this.state.collapsed
                ? 'collapse navbar-collapse'
                : ' navbar-collapse'
            }
            id="navbarNav"
          >
            <ul className="navbar-nav ynhti-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                  to="curriculum"
                >
                  Curricular Resources
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="curriculum/indexes">
                    View index of topics
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="curriculum/units">
                    View resources by volume
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="curriculum/referencelists"
                  >
                    Reference lists
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="brochures"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Reports and Evaluation
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="brochures/studies">
                    Studies
                  </Link>
                  <div className="dropdown-divider" />
                  <Link
                    className="dropdown-item"
                    to="brochures/NewHavenProgram"
                  >
                    New Haven Program
                  </Link>
                  <div className="dropdown-divider" />
                  <Link
                    className="dropdown-item"
                    to="brochures/nationdemonstrationpj"
                  >
                    National Demonstration Project
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="pubs"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Publications
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="pubs/periodical">
                    Periodical
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="pubs/books">
                    Books
                  </Link>
                  <div className="dropdown-divider" />
                  <Link
                    className="dropdown-item"
                    to="brochures/CenterManual/index"
                  >
                    Institute Centers
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="brochures"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Event Proceedings
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">
                    Conferences
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Endowment
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    News Conferences
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="brochures/25th.html ">
                    25th Anniversary
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Congressional Hearings
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Timeline
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="brochures"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About the Institute
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    className="dropdown-item"
                    to="brochures/A1/2019-YNHTI-Annual-Brochure.pdf"
                  >
                    Annual Brochure
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="brochures/A6">
                    Policies, Structure, and Procedures
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="brochures/A9">
                    Awards and Recognition
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Video Programs
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Published Essays
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Contact Us
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </navbar-collapse>
    )
  }
}

export default Navi
