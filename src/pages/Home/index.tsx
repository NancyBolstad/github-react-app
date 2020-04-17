import React from 'react';
import Typography from '../../components/Typography';
import MainContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import Loader from '../../components/Loader';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);

  console.log({ localContext });

  return (
    <MainContent>
      <Typography
        element="h1"
        variant="h1"
        content="Search RAWG Video Games"
        bottom={32}
        top={32}
        bottomDesktop={48}
        topDesktop={48}
        isPrimaryColor
      />
      {localContext.loaded ? <Loader /> : <h1>Data</h1>}
    </MainContent>
  );
};

export default Home;
