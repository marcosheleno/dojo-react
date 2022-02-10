import { useBackButton } from './behavior';

const BackButton = () => {
    return <button onClick={useBackButton}>Voltar</button>;
};

export default BackButton;
