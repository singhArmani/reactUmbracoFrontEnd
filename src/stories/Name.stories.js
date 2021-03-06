import React from 'react';

import { storiesOf, action, linkTo } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Name from '../components/name';

const types = {
    '': '',
    highlight: 'highlight',
    disabled: 'disabled'
  }

    

storiesOf('Components', module)
  .addWithInfo(
    'Name with info', 
    `
    A component to display a colored name tag.
    `,
    () =>  (
      <Name name="Louie Anderson" />
    ),
    { inline: true },
  )
  .add('Name', () =>  (
    <div>
      <h2>Normal</h2>
      <Name name={text('Name', 'Louie Anderson')} type={select('Type', types)}  />
    </div>
));