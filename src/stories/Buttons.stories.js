import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Buttons/Simple', module)
  .add('with text', () => <Button onClick={action('clicked', 'test')}>Hello Button</Button>)
  .add('with link', () => (
    <Button onClick={linkTo('Components', 'Name')}> Go to Name </Button>
  ))

storiesOf('Buttons/Emoji', module)
.add('with some emoji', () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
));
  
