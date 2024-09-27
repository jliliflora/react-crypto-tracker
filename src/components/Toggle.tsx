import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atom";

const Wrapper = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  /* border: 1px solid red; */
`;

const SwitchInput = styled.input`
  position: absolute;
  display: none; /* 기본 체크박스 숨기기 */

  /* appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none; */
`;

const SwitchLabel = styled.label`
  position: relative;
  cursor: pointer;
  display: inline-block;
  width: 58px;
  height: 28px;
  background: ${(props) => props.theme.toggleBgColor};
  border: 2px solid ${(props) => props.theme.toggleBorder};
  border-radius: 20px;
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme.toggleHover};
  }

  ${SwitchInput}:checked + & {
    background: ${(props) => props.theme.toggleBgColor};
    border: 2px solid ${(props) => props.theme.toggleBorder};

    &:hover {
      background: ${(props) => props.theme.toggleHover};
    }
  }
`;

/* */
const SwitchBtn = styled.span`
  position: absolute;
  top: 2px;
  left: ${(props) => props.theme.toggleBtnLeft}px;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${(props) => props.theme.toggleBtnColor};
  transition: 0.2s;

  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: ${(props) => props.theme.toggleBtnLeft}px;
    background: ${(props) => props.theme.toggleBtnColor};
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.12);
  }
`;

function Toggle() {
  const setDarkAtom = useSetRecoilState(isDarkAtom); //setter function은 value를 설정(set)하는 함수
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev); // 반대값을 리턴해줌으로써 true,false가 왔다갔다 할 수 있음

  return (
    <Wrapper>
      <SwitchInput type="checkbox" id="switch" onClick={toggleDarkAtom} />
      <SwitchLabel htmlFor="switch">
        <SwitchBtn />
      </SwitchLabel>
    </Wrapper>
  );
}

export default Toggle;
