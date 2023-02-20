import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Wrapper className="section">
      <div className="error-msg-container">
        <h1>404 NOT FOUND</h1>
        <p>Sorry something went wrong 😥 </p>
        <Link to="/" className="link">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  .error-msg-container {
    .link {
      color: blue;
      text-decoration: underline;
    }
  }

  @media (min-width: 767px) {
    .error-msg-container {
      font-size: 1.5625rem;
      h1 {
        font-size: 2.5rem;
      }
    }
  }
`;
