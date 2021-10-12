import type { NextPage } from 'next';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography } from '@mui/material';
import { 
  FormElementsContainer,
  ProfissionalPaper
} from 'ui/styles/pages/index.style';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <FormElementsContainer>
        <TextFieldMask 
          mask={'99.999-999'}
          label={'Digite seu CEP'} 
          fullWidth
          variant={'outlined'}
        />
        <Typography color={'error'}>CEP inválido</Typography>
        <Button 
          variant={'contained'} 
          color={'secondary'} 
          sx={{width: '220px'}}
        >
          Buscar
        </Button>
      </FormElementsContainer>

      <ProfissionalPaper>
        <UserInformation 
          name={'Akira Hanashito'}
          picture={'https://github.com/hanashiro.png'}
          rating={3}
          description={'São Paulo'}
        />
      </ProfissionalPaper>
    </div>
  );
}

export default Home;