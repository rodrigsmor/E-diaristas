import type { NextPage } from 'next';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}/>
      <UserInformation 
        name={'Akira Hanashito'}
        picture={'https://github.com/hanashiro.png'}
        rating={3}
        description={'São Paulo'}
      />
    </div>
  );
}

export default Home;