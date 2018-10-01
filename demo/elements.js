import React from "react"
import styled from "react-emotion"
import FocusTrap from "focus-trap-react"
import { Keyrune } from "../src"

export const Main = styled(`main`)`
  label: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: "Beleren";
  color: #333;
`

export const Header = styled(`header`)`
  label: header;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 5%;
  background-color: #284558;
  color: #e8ebef;
`

export const Title = styled(`h1`)`
  label: title;
  flex: 1 1 auto;
  max-width: 128rem;
  padding: 0;
  margin: 0;
  color: #e8ebef;
  font-size: 3.5rem;
  text-shadow: 0 1px 0 #112430;
  user-select: none;
`

export const Subtitle = styled(`h2`)`
  label: subtitle;
  padding: 0;
  margin: 0;
  margin-bottom: 1.5rem;
  color: #61605B;
  font-size: 3rem;
  user-select: none;
`

export const Package = styled(`section`)`
  label: package;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 5% 0.5rem 5%;
  border-bottom: 0.1rem solid #284558;
  background-color: #335972;

  @media screen and (max-width: 699px) {
    display: none;
  }
`

export const Code = styled(`span`)`
  label: package-code;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  color: #e8ebef;
  font-size: 2rem;
  font-family: 'Fira Mono', monospace;
`

export const Section = styled(`section`)`
  label: section;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 5% 2.5rem 5%;
`

export const Controls = styled(`div`)`
  label: controls;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 128rem;
`

export const Search = styled(`input`)`
  label: controls-search-input;
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  max-width: 18rem;
  height: 3.6rem;
  padding: 1rem 0.5rem 0;
  border: 0;
  border-bottom: 0.1rem solid #ccc;
  background: none;
  background-color: transparent;
  font-size: 1.6rem;
  font-family: "Beleren";

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(128, 128, 128, 0.5);
    font-style: italic;
  }
`

export const Setlist = styled(`ul`)`
  label: setlist;
  display: grid;
  flex: 1 0 auto;
  width: 100%;
  max-width: 128rem;
  list-style: none;
  justify-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
`

export const SetlistItem = styled(`li`)`
  label: setlist-item;
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  border-radius: 0.5rem;

  &:hover {
    background: #eee;
  }
`

export const IconWrapper = styled(`div`)`
  label: setlist-item-wrapper;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 6.8rem;
  padding: 0.9rem 1rem;
  color: #61605B;
  font-family: "Beleren";
`

export const Icon = styled(`span`)`
  label: setlist-item-icon;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  width: 5.2rem;
`

export const IconName = styled(`strong`)`
  label: setlist-item-name;
  display: inline-flex;
  flex: 1 1 auto;
  justify-content: flex-start;
  padding: 0 1rem;
  font-size: 2rem;
  text-align: left;
  user-select: none;
`

export const IconCode = styled(`em`)`
  label: setlist-item-code;
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 1.6rem;
  color: #999;
  user-select: none;
`

export const Overlay = styled(`aside`)`
  label: modal-overlay;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  ${({ isOpen }) => (isOpen ? `display: flex;` : `display: none;`)};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  ${({ isOpen }) => (isOpen ? `opacity: 1;` : `opacity: 0;`)};
  transition: opacity 2s ease-in;
  cursor: pointer;
`

export const Content = styled(FocusTrap)`
  label: modal-content;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 85rem;
  padding: 3rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.95);
  cursor: default;

  h3 {
    padding: 0 0 0.5rem;
    margin: 1rem 0 2rem;
    border-bottom: 1px solid #ddd;

    span:first-child {
      padding-right: 1rem;
      color: #444;
      font-size: 2.8rem;
    }

    span:last-child {
      color: #777;
      font-size: 2rem;
    }
  }
`

export const Preview = styled(Keyrune)`
  width: 100%;
  margin-bottom: 3rem;
  font-size: 25rem;
  &.ss.ss-grad {
    -webkit-text-stroke-width: 0.15rem;
  }
`

export const Row = styled(`div`)`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 1.6rem;

  strong {
    padding-right: 2rem;
    font-family: 'Open Sans',sans-serif;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    user-select: none;
  }

  label {
    cursor: pointer;
  }

  code {
    padding: 0.4rem 0.8rem;
    background-color: #EFF9F3;
    color: #4A895E;
    font-family: 'Fira Mono', monospace;
    font-size: 1.6rem;
    cursor: text;
  }
`

export const RadioGroup = styled(`ul`)`
  label: radio-group;
  display: flex;
  width: fit-content;
  margin: 0 0 2rem;
  border-radius: 0.5rem;
  border-width: 0.1rem;
  border-style: solid;
  border-color: #008eae;

  &:hover {
    border-color: #166075;

    li:not(:first-child) {
      border-left: 0.1rem solid #166075;
    }
  }

  li:first-child {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  li:not(:first-child) {
    border-left: 0.1rem solid #008eae;
  }

  li:last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`

export const RadioButton = styled(`li`)`
  ${({ active }) => `
    label: radio-group-button;
    position: relative;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    color: ${active ? `#e8ebef` : `#008eae`};
    ${active ? `background-color: #008eae;` : ``};

    &:hover {
      color: #e8ebef;
      background-color: #166075;
    }

    label {
      user-select: none;
      cursor: pointer;
    }
  `}
`

export const CheckboxIcon = styled(`span`)`
  ${({ checked }) => `
    label: checkbox;
    display: inline-flex;
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 1rem;
    border-radius: 0.4rem;
    border: 0.1rem solid #008eae;
    background-color: ${checked ? `#008eae` : `#e8ebef` };

    input {
      position: absolute;
      z-index: -1;
      opacity: 0;
      width: 0;
    }
  `}
`

export const Checkbox = ({ checked = false, children, ...props }) => (
  <label>
    <CheckboxIcon checked={checked}>
      <input type="checkbox" checked={checked} {...props}/>
    </CheckboxIcon>
    {children}
  </label>
)

export const RadioInput = styled(`input`)`
  label: radio-group-input;
  position: absolute;
  z-index: -1;
  opacity: 0;
  width: 0;
`

export const Button = styled(`button`)`
  label: button;
  flex: 1 1 auto;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`

export const CloseButton = component => styled(component)`
  label: modal-close-button;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.2rem 2rem;
  color: #008eae;
  font-size: 3rem;

  &:hover {
    color: #166075;
  }
`

export const Footer = styled(`footer`)`
  label: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 5%;
  margin-top: auto;
  border-top: 0.1rem solid #284558;
  background-color: #335972;
  color: #e8ebef;
  font-size: 1.6rem;

  div {
    display: flex;
    justify-content: space-between;
    flex: 1 1 auto;
    max-width: 128rem;
  }
`
