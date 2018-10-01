module.exports = {
  plugins: [require(`@babel/plugin-proposal-class-properties`)],
  presets: [
    [require(`@babel/preset-env`), { useBuiltIns: `usage` }],
    require(`@babel/preset-react`)
  ]
}
