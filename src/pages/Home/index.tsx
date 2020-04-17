import React from 'react';
import Typography from '../../components/Typography';
import MainContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import { Result } from '../../types/data';
import SearchCards from '../../components/SearchCards/SearchCards';
import CardsList from '../../components/CardsList/';
import Loader from '../../components/Loader';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  const [currentData, setCurrentData] = React.useState<Result[]>([]);
  const [filtedData, setFilterData] = React.useState<Result[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [message, setMessage] = React.useState<string>();

  function filter(value: string) {
    setLoading(true);
    const lowerCaseSearchValue = value.toLowerCase();
    const newArray: Result[] = localContext.default.filter(element => {
      const lowerGameName = element.name.toLowerCase();
      return lowerGameName.startsWith(lowerCaseSearchValue);
    });
    setFilterData(newArray);
    if (value) {
      setMessage(`Find ${newArray.length} cards for ${value}`);
    } else {
      setMessage('');
    }
    setLoading(false);
  }

  React.useEffect(() => {
    setTimeout(function() {
      setLoading(false);
    }, 2000);
  }, [loading]);

  React.useEffect(() => {
    setCurrentData(localContext.default);
  }, [localContext, loading]);

  React.useEffect(() => {
    if (!!filtedData) {
      setCurrentData(filtedData);
    }
  }, [filtedData]);

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
      <SearchCards handler={filter} />
      {!!message && message.length > 0 && (
        <Typography variant="b2" element="p" content={message} isPrimaryColor />
      )}
      {loading ? <Loader /> : <CardsList cards={currentData} />}
    </MainContent>
  );
};

export default Home;