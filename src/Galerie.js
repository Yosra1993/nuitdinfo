import React, { Component } from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import './AboutUs.css';

class  Galeries extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            
            <div>
        <hr/>
  
<InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={3}
    slidesToShow={3}
    scrollOnDevice={true}
    autoCycle={true}
    animationDuration= {150}
    
  >
    <div>
      <img
        alt=''
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3EA4-wMoyGQU8SZxYsoTv6lw5n4hyJqiMlI_p3h41anPUyIAu6Q"

      />
    </div>
    <div>
      <img
        alt=''
        src="https://www.tacapes-tours.com/upload/2017/11/20/5133456.jpeg"
      />
    </div>
    <div>
      <img
        alt=''
        src="https://www.tacapes-tours.com/upload/2017/11/20/10154646.jpeg"
      />
    </div>
    <div>
      <img
        alt=''
        src="https://www.explorelemonde.com/wp-content/uploads/2015/06/MG_1044.jpg"
      />
    </div>
    <div>
      <img
        alt=''
        src="https://media-cdn.tripadvisor.com/media/photo-s/02/4e/17/ad/real-morocco-tours.jpg"
      />
    </div>
    
  </InfiniteCarousel>
,

</div>
        );
    }
}

export default Galeries ;