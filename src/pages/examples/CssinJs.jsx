import styled, { css } from 'styled-components';

function CssInJs() {
  return (
    <>
      <h2 style={style}>CssInJs</h2>
      <Button1 primary>버튼1</Button1>
      <Button1>버튼2</Button1>
      <Button2 primary>버튼3</Button2>
      <Button2>버튼4</Button2>
    </>
  );
}

const style = {
  backgroundColor: 'red',
};

const Button2 = styled.button`
  bachground: palevioletered;
  border-radius: 3 px;
  border: none;
  color: hotpink;

  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;
function Button1({ primary, children }) {
  return (
    <button
      style={{
        backgroundColor: 'hotpink',
        borderRadius: '3px',
        border: 'none',
        color: 'white',
        ...(primary && { backgroundColor: 'white', color: 'block' }),
      }}
    >
      {children}
    </button>
  );
}
export default CssInJs;
