import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
const Arrow= styled.div`
    width: 50px;
    height: 50px;
    background-color:#fff7f7;
    border-radius: 50%;
`;

const Slider = () => {
    return (
        <Container>
            <Arrow>
                <ArrowLeftOutlined/>
            </Arrow>
             <Arrow>
                <ArrowRightOut/>
            </Arrow>

        </Container>
    )
}

export default Slider
