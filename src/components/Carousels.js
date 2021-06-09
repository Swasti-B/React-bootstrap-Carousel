import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'

function Carousels(){
    return(
        <>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../Images/pic1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Image 1 of 3</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../Images/pic2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>Image 2 of 3</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../Images/pic3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>Image 3 of 3</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Button variant="primary" size="sm" block>
     Present
    </Button>
    </>
    )
}
export default Carousels;   