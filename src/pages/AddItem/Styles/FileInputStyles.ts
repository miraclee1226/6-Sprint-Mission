import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../../assets/deleteIcon.svg";

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const FileContainer = styled.label`
  display: inline-block;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 282px;
  height: 282px;
  border-radius: 12px;
  background-color: var(--input-background-color);

  @media ${props => props.theme.mobile} {
    width: 162px;
    height: 162px;
  }

  @media ${props => props.theme.tablet} {
    width: 162px;
    height: 162px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: var(--placeholder-color);
`;

export const Input = styled.input`
  display: none;
`;

export const ImagePreviewContainer = styled.div`
  position: relative;
  width: 282px;
  height: 282px;

  @media ${props => props.theme.mobile} {
    width: 162px;
    height: 162px;
  }

  @media ${props => props.theme.tablet} {
    width: 162px;
    height: 162px;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const DeleteIcon = styled(CloseIcon)`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  fill: var(--main-color);
`;
