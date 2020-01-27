const extendClick = () => {
  return `
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -10px; bottom: -10px; left: -10px; right: -10px;
    };
  `
}

const noWrap = () => {
  return `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `
}

export default {
  'primary-color': '#141468',
  'accent-color': '#ffda0a',
  'bg-color': '#f6f7fa',
  'grey': '#8a97b4',
  'red': '#fd7376',
  'text-light': '#b8b8b8',
  extendClick,
  noWrap
}