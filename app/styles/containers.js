export const box = {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'stretch',
};

export const vbox = Object.assign({
  flexDirection: 'column',
}, box);

export const hbox = Object.assign({
  flexDirection: 'row',
}, box);
