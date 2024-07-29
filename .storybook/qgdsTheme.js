import { create } from '@storybook/theming/create';
import coa from '../src/assets/img/qg-coa-stacked-white.svg';

export default create({
  base: 'dark',
  brandTitle: 'QGDS',
  brandUrl: 'https://qld.gov.au',
  brandImage: coa,
  brandTarget: '_self',
});