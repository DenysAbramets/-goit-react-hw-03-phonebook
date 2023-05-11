import styled from '@emotion/styled';

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Description = styled.p`
  color: #000;
  text-decoration: none;
  font-size: 1.2rem;
`;
export const Button = styled.button`
  height: 35px;
`;
