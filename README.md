Warlock
===


## Styleguide

### Code and Logic

#### Logging
Logging messages should be understandle, and place they are logged from should always be present, e.g.

  console.log('ButtonComponent.onPress', 'props.someValue', prop.someValue);
  console.debug('Text.render', 'state?', state);
  
This way it's always clear where did log originated and what's the purpose of it.
