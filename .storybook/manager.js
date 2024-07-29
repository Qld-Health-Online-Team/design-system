import { addons } from '@storybook/manager-api';
//import { themes } from '@storybook/theming';
import qgdsTheme from '../.storybook/qgdsTheme';

addons.setConfig({
  theme: qgdsTheme,
});