# tt-front-lib

## Project setup
```
npm i @coocaa/tt-front-lib
```

## Usage
```
import '@cooca/tt-front-lib'
```

## Icon
[image](https://github.com/Yumi-Romain/tt-front-lib/blob/main/images/icons.png?raw=true)
```html
<tt-icon
  icon="home | like | logo | message | photo | plus | profil | touitteur | unlike | search"
  color="primary | secondary"
  :ttstyle="<Object>"
  size="1em"
/>
```

## button
[image](https://github.com/Yumi-Romain/tt-front-lib/blob/main/images/buttons.png?raw=true)
```html
<tt-button
  type="plain | text"
  icon="<iconName>"
  color="primary | secondary"
  iconMargin=".5em"
  iconPlacement="left | right"
  :ttstyle="<Object>"
>
  button text
</tt-button>
```

## Input
[image](https://github.com/Yumi-Romain/tt-front-lib/blob/main/images/inputs.png?raw=true)
```html
<tt-button
  placeholder="<placeholder>"
  type="plain | stroke"
  icon="<iconName>"
  color="primary | secondary"
  iconMargin=".5em"
  iconPlacement="left | right"
  :ttstyle="<Object>"
></tt-input>
```

## Container
you can use multiple border name separated by space
```html
<tt-container
  :ttstyle="<Object>"
  border="bottom | top | left | right | all"
></tt-container>
```
