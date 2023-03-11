import React from 'react'

const Notfound = () => {
  return (
    <section className='text-center'>
        <div className="container">
            <div id="info" className="text-center">
                <div className="errorimg">
                    {/* <img src="https://i.imgur.com/qIufhof.png" /> */}
                    <span>404</span>
                </div>
                <h1>Page not found</h1>
                <p>We are sorry but the page you are looking for does not exist.</p>
            </div>
        </div>
</section>
  )
}

export default Notfound
