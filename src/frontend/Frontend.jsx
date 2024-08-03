import useStore from '../store.js';
import Container from './components/Container.jsx';

function Frontend() {
  const { selectedAnimation } = useStore();

  return (
    <>
        <Container />
    </>
  );
}

export default Frontend;