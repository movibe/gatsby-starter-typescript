import {text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'
import * as React from 'react'

import {Header} from '../'


storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('normal', () => (
    <Header siteTitle={text('siteTitle', 'Page title')} />
  ))
