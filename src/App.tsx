
import styled from 'styled-components';
import Card from "./card/Card.styled";
import dune from './assets/dune.svg'

const store = {
    card: {
        image: dune,
        title: 'Headline',
        description: 'Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.',
    }
}
function App() {
    return (
        <Body>
            <Card image={store.card.image} title={store.card.title} description={store.card.description}/>
        </Body>
    );
}

const Body = styled.article`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export default App;