export const boxStyle = {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'stretch',
};

export const vboxStyle = Object.assign({}, boxStyle, {
  flexDirection: 'column',
});

export const hboxStyle = Object.assign({}, boxStyle, {
  flexDirection: 'row',
});
