import { Container, Links, Content } from './styles'

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';



export function Details() {
  return(
    <Container>
      <Header/>

      <main>
        <Content>
        <ButtonText title="Delete notes" />

        <h1>
          Introduction React
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur, eaque expedita enim blanditiis voluptatum consequuntur? Sunt accusamus, facilis aperiam consectetur quisquam magnam fugiat ex optio porro, nisi quod illum.
        </p>

        <Section title="Useful links">
          <Links>
            <li><a href="#">https://www.rocketseat.com.br</a></li>
            <li><a href="#">https://www.rocketseat.com.br</a></li>
          </Links>
        </Section>

        <Section title="Markers">
          <Tag title="express" />
          <Tag title="nodejs" />
        </Section>

        <Button title="Return" />
      </Content>
    </main>
    </Container>
  );
}