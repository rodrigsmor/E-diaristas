import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material"

export const FormElementsContainer = styled('div')`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${({ theme}) => theme.spacing(5)};
    max-width: 650px;
    margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const ProfissionalPaper = styled(Paper)`
    
`;