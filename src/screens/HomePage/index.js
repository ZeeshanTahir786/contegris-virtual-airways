import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Cards from './Cards';
import Header from './Header';
import Tabss from './Tabs';


const HomePage = () => {
    return (
        <Parent>
            <Header />
            <Banner />
            <Cards />
            {/* <Tabss /> */}
        </Parent>
    )
}

export default HomePage;
const Parent = styled.div`
`;
const Child = styled.div`

`;
