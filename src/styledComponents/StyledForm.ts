import styled from "styled-components";
import { Form } from "rsuite";
import { Breakpoints } from "../constants/breakpoints";

export const CenteredFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CenteredFormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  margin-top: 40px;
  @media (max-width: ${Breakpoints.mobile}) {
    margin-top: unset;
  }
`;

export const CenteredForm = styled(Form)`
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CenteredFormBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
