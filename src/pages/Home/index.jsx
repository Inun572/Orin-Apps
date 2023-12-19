import { useDocumentTitle } from '../../hooks/customHooks';

const Home = () => {
  useDocumentTitle('Home');
  return <div>Homepage</div>;
};

export default Home;
