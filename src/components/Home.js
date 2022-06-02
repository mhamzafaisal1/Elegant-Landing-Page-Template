import React from 'react'
import styled from 'styled-components';
import Section from './Section';


const Home = () => {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order Online Now for Touch-less Delivery'
                backgroundImg="model-s.jpg"
                rightBtnText="Existing Inventory"
                leftBtnText="Custom Order"
            />
            <Section
                title='Model Y'
                description='Order Online Now for Touch-less Delivery'
                backgroundImg="model-y.jpg"
                rightBtnText="Existing Inventory"
                leftBtnText="Custom Order"
            />
            <Section
                title='Model 3'
                description='Order Online Now for Touch-less Delivery'
                backgroundImg="model-3.jpg"
                rightBtnText="Existing Inventory"
                leftBtnText="Custom Order"
            />
            <Section
                title='Model X'
                description='Order Online Now for Touch-less Delivery'
                backgroundImg="model-x.jpg"
                rightBtnText="Existing Inventory"
                leftBtnText="Custom Order"
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money Back Guarantee'
                backgroundImg="solar-panel.jpg"
                rightBtnText="Order Now"
                leftBtnText="Learn More"
            />
            <Section
                title='Solar for New Roofs'
                description='Solar Roof Costs Less Than a New Roof'
                backgroundImg="solar-roof.jpg"
                rightBtnText="Order Now"
                leftBtnText="Learn More"
            />
            <Section
                title='Accessories'
                description=''
                backgroundImg="accessories.jpg"
                rightBtnText=""
                leftBtnText="Order Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10;

`