# cf-component-dropdown

> Cloudflare Dropdown Component

## Installation

```sh
$ npm install cf-component-dropdown
```

## Usage

```jsx
import React from 'react';
import {
  Dropdown,
  DropdownLink,
  DropdownSeparator
} from 'cf-component-dropdown';
import { Button, ButtonTheme } from 'cf-component-button';

class DropdownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown1Open: false,
      dropdown2Open: false
    };
  }

  render() {
    return (
      <ButtonGroup>
        <Button
          type="primary"
          onClick={() => this.setState({ dropdown1Open: true })}
        >
          Open Dropdown 1
        </Button>

        {this.state.dropdown1Open &&
          <Dropdown onClose={() => this.setState({ dropdown1Open: false })}>
            <DropdownLink to="/foo">Link to /foo</DropdownLink>
            <DropdownLink to="/bar">Link to /bar</DropdownLink>
            <DropdownSeparator />
            <DropdownLink to="/baz">Link to /baz</DropdownLink>
            <DropdownLink to="/bat">Link to /bat</DropdownLink>
          </Dropdown>}

        <Button
          type="success"
          onClick={() => this.setState({ dropdown2Open: true })}
        >
          Open Dropdown 2
        </Button>

        {this.state.dropdown2Open &&
          <Dropdown
            align="right"
            onClose={() => this.setState({ dropdown2Open: false })}
          >
            <DropdownLink to="/foo">Link to /foo</DropdownLink>
            <DropdownLink to="/bar">Link to /bar</DropdownLink>
            <DropdownSeparator />
            <DropdownLink to="/baz">Link to /baz</DropdownLink>
            <DropdownLink to="/bat">Link to /bat</DropdownLink>
          </Dropdown>}
      </ButtonGroup>
    );
  }
}

export default DropdownComponent;
```

You can also optionally pass an `align` prop with either `"left"` or `"right"`.

```html
<Dropdown align="right" ...>
```

`<DropdownLink/>` just wraps
[`cf-component-link`](https://www.npmjs.com/package/cf-component-link) so
you can use either `to` to specify a route or pass an `onClick` handler.

```js
<DropdownLink to="/my-route"/>
<DropdownLink onClick={this.handleClick}/>
```

Note: `to` requires that you setup
[`cf-util-route-handler`](https://www.npmjs.com/package/cf-util-route-handler)
prior to routing.
