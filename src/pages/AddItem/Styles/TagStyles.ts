import { styled } from 'styled-components';
import { ReactComponent as CloseIcon } from "../../../assets/deleteIcon.svg";

export const Wrapper = styled.div``;

export const Ul = styled.ul`
  display: flex;
  gap: 8px;
`;

export const Li = styled.li`
  display: flex;
  gap: 8px;
  height: 48px;
  padding: 12px 12px 12px 16px;
  border-radius: 26px;
  background-color: #F9FAFB;
`;
  
export const TagSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const CloseIconSpanContainer = styled.span``;

export const CloseIconSpan = styled(CloseIcon)`
  width: 20px;
  height: 20px;
  fill: var(--placeholder-color);
  margin-top: 2px;
  cursor: pointer;
`;