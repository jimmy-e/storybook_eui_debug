import '../src/theme.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'pink',
    values: [
      { name: 'pink', value: '#FFC0CB' },
      { name: 'white', value: '#FFFFFF' },
    ],
  },
};
