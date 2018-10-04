import React from 'react'
import { render } from 'react-testing-library'
import { Keyrune } from "../keyrune"
import keyrune from "../keyrune.scss" // eslint-disable-line

jest.mock(`../keyrune.scss`, () => ({
  sizes: `"2x", "3x", "4x", "5x", "6x"`,
  rarities: `"common" "uncommon" "rare" "mythic" "timeshifted"`,
  ogw: `"Oath of the Gatewatch"`,
  zen: `"Zendikar"`
}))

describe(`Keyrune`, () => {
  describe(`valid`, () => {
    it(`renders an i element`, () => {
      const { container } = render(<Keyrune />)
      expect(container.firstChild.nodeName).toBe(`I`)
    })

    it(`has the 'ss' class`, () => {
      const { container } = render(<Keyrune />)
      expect(container.firstChild.classList.contains(`ss`)).toBeTruthy()
    })

    it(`has the 'ss-zen' class when the 'set' prop is set to 'zen'`, () => {
      const { container } = render(<Keyrune set="zen" />)
      expect(container.firstChild.classList.contains(`ss-zen`)).toBeTruthy()
    })

    it(`has the 'ss-fw' class when the 'fixed' prop is set to true`, () => {
      const { container } = render(<Keyrune fixed />)
      expect(container.firstChild.classList.contains(`ss-fw`)).toBeTruthy()
    })

    it(`has the 'ss-grad' class when the 'gradient' prop is set to true`, () => {
      const { container } = render(<Keyrune gradient />)
      expect(container.firstChild.classList.contains(`ss-grad`)).toBeTruthy()
    })

    it(`has the 'ss-grad' and 'ss-foil' classes when the 'foil' prop is set to true`, () => {
      const { container } = render(<Keyrune foil />)
      expect(container.firstChild.classList.contains(`ss-grad`)).toBeTruthy()
      expect(container.firstChild.classList.contains(`ss-foil`)).toBeTruthy()
    })

    it(`has a 'ss-[2-6]x' class when the 'size' prop has a valid size value`, () => {
      [`2x`, `3x`, `4x`, `5x`, `6x`].forEach(size => {
        const { container } = render(<Keyrune size={size} />)
        expect(container.firstChild.classList.contains(`ss-${size}`)).toBeTruthy()
      })
    })

    it(`has a rarity class when the 'rarity' prop has a valid rarity value`, () => {
      [`common`, `uncommon`, `rare`, `mythic`, `timeshifted`].forEach(rarity => {
        const { container } = render(<Keyrune rarity={rarity} />)
        expect(container.firstChild.classList.contains(`ss-${rarity}`)).toBeTruthy()
      })
    })

    it(`includes a custom class when passed in via the 'className' prop`, () => {
      const { container } = render(<Keyrune className="custom" />)
      expect(container.firstChild.classList.contains(`custom`)).toBeTruthy()
    })
  })

  describe(`invalid`, () => {
    it(`does not have additional classes when passed an invalid 'set' prop`, () => {
      const { container } = render(<Keyrune set="INVALID SET" />)
      expect(container.firstChild.classList).toHaveLength(1)
    })

    it(`does not have additional classes when the 'size' prop has a invalid size value`, () => {
      [`1x`, `7x`, 1, NaN, Infinity, null, false].forEach(size => {
        const { container } = render(<Keyrune size={size} />)
        expect(container.firstChild.classList).toHaveLength(1)
      })
    })

    it(`does not have rarity class when the 'rarity' prop has an invalid rarity value`, () => {
      [`INVALID`, 1, NaN, Infinity, null, false].forEach(rarity => {
        const { container } = render(<Keyrune rarity={rarity} />)
        expect(container.firstChild.classList).toHaveLength(1)
      })
    })
  })
})
