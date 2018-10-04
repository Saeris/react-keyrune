import React from "react"
import classnames from "classnames"
import "keyrune/sass/keyrune.scss"
import keyrune from "./keyrune.scss"

const { rarities: rawRarities, sizes: rawSizes, ...setlist } = keyrune

export const sizes = rawSizes.replace(/[",]+/g, ``).split(` `)

export const sets = Object.entries(setlist).reduce((hash, [key, value]) => {
  hash[key] = value.replace(/"+/g, ``)
  return hash
}, {})

export const rarities = rawRarities.replace(/"+/g, ``).split(` `)

const raritiesMap = new Map([
  ...rarities.map(rarity => [rarity, rarity]),
  ...rarities.map(rarity => [rarity.charAt(0), rarity])
])

export const Keyrune = ({
  set,
  size,
  fixed = false,
  rarity,
  gradient = false,
  foil = false,
  className,
  ...props
}) => (
  <i
    title={sets[set]}
    alt={sets[set]}
    className={classnames(className, {
      "ss": true,
      [`ss-${set}`]: Object.keys(sets).includes(set),
      [`ss-${size}`]: sizes.includes(size),
      "ss-fw": fixed,
      [`ss-${raritiesMap.get(rarity)}`]: raritiesMap.has(rarity),
      "ss-grad": gradient || foil,
      "ss-foil": foil
    })}
    aria-hidden
    {...props}
  />
)
