<<<<<<< HEAD
import styled from "styled-components";
=======
import styled from 'styled-components';
>>>>>>> 5f1f4676f99ff4c2be008e43e2b334c407c9a12a

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);
  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }
  input {
    font-size: 28px;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);
<<<<<<< HEAD
    outline: none;
=======
>>>>>>> 5f1f4676f99ff4c2be008e43e2b334c407c9a12a
    :focus {
      outline: none;
    }
    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
<<<<<<< HEAD
`;
=======
`;
>>>>>>> 5f1f4676f99ff4c2be008e43e2b334c407c9a12a
