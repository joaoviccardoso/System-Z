import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 350px;
  padding: 30px;
  background-color: white;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;