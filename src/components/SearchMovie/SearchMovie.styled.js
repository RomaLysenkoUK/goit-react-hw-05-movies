import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-left: 40px;
  margin-top: 30px;
`;
export const Button = styled.button`
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.background};
  border: none;
  font-size: 16px;
  padding: 5px 15px;
  //   transition: color ${p => p.theme.animation},
  //     background-color ${p => p.theme.animation},
  //     box-shadow ${p => p.theme.animation};
  &:hover {
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.muted};
    box-shadow: ${p => p.theme.white};
  }
`;

export const Input = styled.input`
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.background};
  &:focus {
    outline-color: ${p => p.theme.colors.accent};
  }
`;
