import React from 'react';
import { 
    SafeEnvironmentContainer,
} from './SafeEnvironment.styled';

import { Container } from '@mui/material'

const SafeEnvironment = () => {
    return (
        <SafeEnvironmentContainer>
            <Container>
                Ambiente seguro <i className={'twf-lock'}/>
            </Container>
        </SafeEnvironmentContainer>
    );
}

export default SafeEnvironment;