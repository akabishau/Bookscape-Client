import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto; /* header, main, footer */
  align-items: start;
  width: 100%;
  height: 100vh;
`;
