import { configure, addDecorator, setAddon} from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import infoAddon, {setDefaults} from '@storybook/addon-info';

// addon-info
setDefaults({
  inline: true,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100,
});
setAddon(infoAddon);

import React from 'react';

addDecorator(withKnobs);
addDecorator((story) => (
  <div>
      <h1>Examples </h1>
        {story()}
  </div>
));

configure(
  () => {
    const req = require.context('../src', true, /.stories.js$/);
    req.keys().forEach((filename) => req(filename));
  },
  module
);

configure(loadStories, module);
