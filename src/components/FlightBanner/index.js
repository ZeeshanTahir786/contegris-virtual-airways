import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../assests/images/signature.jpg"
import Image2 from "../../assests/images/Mask-ad.jpg";
import Image3 from "../../assests/images/Sialkot-Skardu.jpg";
import styled from "styled-components";

const FlightBanner = () => {
    return (
        <MainCon>
            <ChildCon>
                <Carousel autoPlay interval={5000} infiniteLoop showStatus={false} showThumbs={false} dynamicHeight>
                    <div>
                        <img src={Image1} alt="" loading="lazy" />
                    </div>
                    <div>
                        <img src={Image2} alt="" loading="lazy" />
                    </div>
                    <div>
                        <img src={Image3} height={400} alt="" loading="lazy" />
                    </div>
                    {/* <div>
                        <img src={Image4} alt="" loading="lazy" />
                    </div> */}
                </Carousel>
            </ChildCon>
        </MainCon>
    )
}

export default FlightBanner;
const MainCon = styled.div`
position:relative;
`;
const ChildCon = styled.div`
position:absolute;
max-height:100%;
width:100%;
bottom:0;
z-axis:20;
`;