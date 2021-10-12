import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';

export const FooterStyled = styled('footer')`
    margin-top: auto;
    background: ${({ theme }) => theme.palette.primary.main };
    color: ${({ theme }) => theme.palette.primary.contrastText };
    padding: ${({ theme }) => theme.spacing(4)} 0;
`;

export const FooterContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(2)};
    flex-wrap: wrap;
    
    ${({ theme }) => theme.breakpoints.down('md')}{
        gap: ${({ theme }) => theme.spacing(5)};
    }
`;

export const FooterTitle = styled((props) => (
    <Typography component={'h2'} variant={'body2'} {...props} />
))`
    font-weight: bold;
    text-align: justify;
`;

export const AppList = styled('ul')`
    padding: 0;
    display: flex;
    list-style-type: none;
    gap: ${({ theme }) => theme.spacing(2)};

    img {
        width: 122px;
    }
`;
