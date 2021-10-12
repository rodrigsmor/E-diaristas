import { styled } from '@mui/material/styles';

export const SafeEnvironmentContainer = styled('div')`
    font-size: 12px;
    text-align: right;
    padding: ${({ theme }) => theme.spacing(2) } 0;
    color: ${({ theme }) => theme.palette.text.secondary };
    background: ${({ theme }) => theme.palette.background.default };
`;