import React from 'react'
import './Product1.css'
function Product1() {
  return (
  <>

<div className='card'>
        <div className="header">
            <img src="company.png" />
            <h3>shubham Singh</h3>
            <p>Website Developer</p>
        </div>

        <div className="body">
            <ul>
                <li>
                    <h3><a href="tel:+917011976636">70119-76636</a></h3>
                    <p>Mobile number</p>
                    <i className="fas fa-mobile-alt"></i>
                </li>
                <li>
                    <h3><a href="https://wa.me/7011976636">70119-76636</a></h3>
                    <p>Whatsapp</p>
                    <i className="fab fa-whatsapp"></i>
                </li>
                <li>
                    <h3><a href="https://goo.gl/maps/uBX1rGYg9crR8Fqy8">Delhi Laxmi nagar</a></h3>
                    <p>Location</p>
                    <i className="fas fa-map-marked"></i>
                </li>
			</ul>
			
        </div>
    <div className="body1">
            <ul>
                <li>
                    <h3><a href="mailto:xyz@gmail.com">xyzgmail.com</a></h3>
                    <p>Email address</p>
                    <i className="fas fa-envelope"></i>
                </li>
                <li>
                    <h3><a href="https://storedukaan.blogspot.com/">www.storedukaan.com</a></h3>
                    <p>Website address</p>
                    <i className="fas fa-globe-americas"></i>
                </li>
			</ul>
			
        </div>
        <div className="footer">
            <ul>
                <li>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                   <a href="#"> <i className="fab fa-instagram"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </li>
            </ul>
        </div>

    </div>



  </>
  )
}

export default Product1





