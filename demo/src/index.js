import React, { Component } from "react"
import { render } from "react-dom"
import { Keyrune, sets, rarities, sizes } from "@saeris/react-keyrune"
import { State } from "./state"
import { Modal } from "./modal"
import { Radio } from "./radio"
import {
  Main,
  Header,
  Title,
  Subtitle,
  Package,
  Code,
  Section,
  Controls,
  Search,
  GroupTitle,
  Group,
  Setlist,
  SetlistItem,
  IconWrapper,
  Icon,
  IconDetails,
  IconName,
  IconCode,
  Preview,
  Row,
  Toggleables,
  Toggle,
  LoyaltyButton,
  RadioInput,
  CloseButton,
  Footer
} from "./elements"
import "../public/fonts/index.scss"

const App = () => (
  <State
    initial={{
      filter: ``,
      modal: {
        activeIcon: null,
        size: `Normal`,
        rarity: `None`,
        fixed: false,
        gradient: false,
        foil: false
      }
    }}
  >
    {({ state, update, reset }) => {
      const { activeIcon, rarity, size, fixed, gradient, foil } = state.modal
      return (
        <Main>
          <Header>
            <Title>
              <a
                href="https://www.github.com/saeris/react-keyrune"
                title="React Keyrune on GitHub"
                target="_blank"
                rel="noopener"
              >
                <Keyrune fixed set="leg" />
                React Keyrune
              </a>
            </Title>
          </Header>
          <Package>
            <Code>{`yarn add @saeris/react-keyrune keyrune`}</Code>
            <Code>{`import { keyrune } from "@saeris/react-keyrune"`}</Code>
          </Package>

          <Modal>
            {({
              isOpen,
              handleToggle,
              ToggleModal,
              ModalOverlay,
              ModalContent
            }) => {
              const Close = CloseButton(ToggleModal)
              return (
                <Section>
                  <Controls>
                    <Subtitle>Set Icons:</Subtitle>
                    <Search
                      type="text"
                      placeholder="Search Icons..."
                      value={state.filter}
                      onChange={e => {
                        e.preventDefault()
                        update({
                          filter: e.target.value
                        })
                      }}
                    />
                  </Controls>
                  <Setlist>
                    {Object.entries(sets)
                      .filter(
                        ([code, name]) =>
                          state.filter
                            ? `${name} ${code}`
                                .toLowerCase()
                                .includes(state.filter.toLowerCase())
                            : true
                      )
                      .map(([code, name]) => (
                        <SetlistItem key={code}>
                          <ToggleModal
                            id={code}
                            onClick={e => {
                              update(({ modal }) => ({
                                modal: { ...modal, activeIcon: code }
                              }))
                            }}
                          >
                            <IconWrapper>
                              <Icon>
                                <Keyrune fixed set={code} size="4x" />
                              </Icon>
                              <IconDetails>
                                <IconName>{name}</IconName>
                                <IconCode>({code})</IconCode>
                              </IconDetails>
                            </IconWrapper>
                          </ToggleModal>
                        </SetlistItem>
                      ))}
                  </Setlist>
                  <ModalOverlay>
                    {isOpen ? (
                      <ModalContent>
                        <h3>
                          <span>{sets[activeIcon]}</span>
                          <span>{`(${activeIcon})`}</span>
                        </h3>
                        <Row>
                          <Preview
                            fixed
                            set={activeIcon}
                            foil={foil}
                            gradient={gradient}
                            rarity={rarity.toLowerCase()}
                          />
                        </Row>
                        <Row>
                          <strong>JSX:</strong>
                          <code>
                            {`<Keyrune set="${activeIcon}" ${
                              rarity !== `None`
                                ? `rarity="${rarity.toLowerCase()}" `
                                : ``
                            }${size !== `Normal` ? `size="${size}" ` : ``}${
                              fixed ? `fixed ` : ``
                            }${gradient ? `gradient ` : ``}${
                              foil ? `foil ` : ``
                            }/>`}
                          </code>
                        </Row>
                        <Radio
                          name="size"
                          selected={size}
                          onChange={({ selected }) => {
                            update(({ modal }) => ({
                              modal: { ...modal, size: selected }
                            }))
                          }}
                        >
                          {[`Normal`, ...sizes].map(value => (
                            <RadioInput key={value} value={value} />
                          ))}
                        </Radio>
                        <Radio
                          name="rarity"
                          selected={rarity}
                          onChange={({ selected }) => {
                            update(({ modal }) => ({
                              modal: { ...modal, rarity: selected }
                            }))
                          }}
                        >
                          {[`None`, ...rarities].map(value => (
                            <RadioInput
                              key={value}
                              value={`${value[0].toUpperCase()}${value.slice(
                                1
                              )}`}
                            />
                          ))}
                        </Radio>
                        <Toggleables>
                          <Toggle
                            checked={gradient}
                            onChange={e => {
                              update(({ modal }) => ({
                                modal: { ...modal, gradient: !gradient }
                              }))
                            }}
                          >
                            Gradient
                          </Toggle>
                          <Toggle
                            checked={foil}
                            onChange={e => {
                              update(({ modal }) => ({
                                modal: { ...modal, foil: !foil }
                              }))
                            }}
                          >
                            Foil
                          </Toggle>
                          <Toggle
                            checked={fixed}
                            onChange={e => {
                              update(({ modal }) => ({
                                modal: { ...modal, fixed: !fixed }
                              }))
                            }}
                          >
                            Fixed
                          </Toggle>
                        </Toggleables>
                        <Close onClick={reset}>
                          <Keyrune title="Close Modal" fixed set="10e" />
                        </Close>
                      </ModalContent>
                    ) : null}
                  </ModalOverlay>
                </Section>
              )
            }}
          </Modal>
          <Footer>
            <div>
              <span>
                <a
                  href="https://www.github.com/saeris/react-keyrune"
                  title="GitHub Repository"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
              </span>
              <span>
                {`Coded with 💙 by `}
                <a
                  href="https://www.github.com/saeris"
                  title="Drake Costa (@Saeris) on GitHub"
                  target="_blank"
                  rel="noopener"
                >
                  Drake Costa
                </a>
              </span>
            </div>
          </Footer>
        </Main>
      )
    }}
  </State>
)

render(<App />, document.getElementById("root"))
