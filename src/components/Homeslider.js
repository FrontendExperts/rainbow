import React from 'react'

export const Homeslider = () => {
  return (
    <>
{/* <div id="carouselMaterialStyle" className="carousel slide carousel-fade" data-mdb-ride="carousel">

  <div classNameName="carousel-indicators">
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" classNameName="active" aria-current="true"
      aria-label="Slide 1"></button>
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div classNameName="carousel-inner rounded-5 shadow-4-strong">

    <div classNameName="carousel-item active">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" classNameName="d-block w-100"
        alt="Sunset Over the City" />
      <div classNameName="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>


    <div classNameName="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" classNameName="d-block w-100"
        alt="Canyon at Nigh" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>


    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100"
        alt="Cliff Above a Stormy Sea" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>


  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1>Trusted Printing Services <span className='d-block'>for Art and Business</span></h1>
        <p>Design helps us to stand out, It tells a story
about us and what we stand for.</p>
      </div>
    </div>
    

    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
     
        <h1>Excellence in Print & Service</h1>
        <p>We've been printing it ahead of the schedule and
under the budget for years!</p>
      </div>
     
    </div>
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1>The Power of Printing</h1>
        <p> Traditional printing (offset and inkjet printing) and new data-driven print technologies (digital printing) are driving online and offline sales, helping your business to be seen in a new way!</p>
      </div>
    </div>
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>


    </>
  )
}
