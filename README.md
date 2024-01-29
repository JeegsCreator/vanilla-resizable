# Vanilla resizable component based on Shadcn/ui resizable

## How to use it

### Basic usage
The component is based on classes:
- rezisable: the parent of the component
- children: each one of the boxes
- handler-container and .handler: to work we need both empty divs
```javascript
<div class="resizable" >
  <div class="children">
    <p>1</p>
  </div>
  <div class="handler-container">
    <div class="handler"></div>
  </div>
  <div class="children">
    <p>2</p>
  </div>
</div>
```

### Direction
use the data-direction attribute to control the direction. (`vertical` or `horizontal`).
default: `vertical`
```javascript
<div class="resizable" data-direction="horizontal">
  <div class="children">
    <p>1</p>
  </div>
  <div class="handler-container">
    <div class="handler"></div>
  </div>
  <div class="children">
    <p>2</p>
  </div>
</div>
```

### Default size
use the data-space attribute to set a default size, this work as the fr property in CSS.
default: `1`
```javascript
<div class="resizable">
  <div class="children" data-space="2">
    <p>1</p>
  </div>
  <div class="handler-container">
    <div class="handler visible"></div>
  </div>
  <div class="children" data-space="1">
    <p>2</p>
  </div>
</div>
```

### Min size
use the data-min-size attribute to set the minimum size the box could have in pixels.
default: `12`
> This property will override if the data-space attribute is smaller than this attribute
```javascript
<div class="resizable">
  <div class="children" data-min-size="50">
    <p>1</p>
  </div>
  <div class="handler-container">
    <div class="handler visible"></div>
  </div>
  <div class="children" data-min-size="100">
    <p>2</p>
  </div>
</div>
```

### Visible Handle
By default the handle is just the divisor line, you can make the handle visible by adding the `visible` class next to the `handler` class. 

```javascript
<div class="resizable" >
  <div class="children">
    <p>1</p>
  </div>
  <div class="handler-container">
    <div class="handler visible"></div>
  </div>
  <div class="children">
    <p>2</p>
  </div>
</div>
```
### Nested resizable
You can nest resizable as you want.

```javascript
<div class="resizable" data-direction="horizontal">
  <div class="children">
    <p>1</p>
  </div>
  <div class="handler-container">
    <div class="handler visible"></div>
  </div>
  <div class="children">
    <p>2</p>
  </div>
  <div class="handler-container">
    <div class="handler visible"></div>
  </div>
  <div class="children">
    <div class="resizable" data-direction="vertical">
      <div class="children">
        <p>3</p>
      </div>
      <div class="handler-container">
        <div class="handler"></div>
      </div>
      <div class="children">
        <p>4</p>
      </div>
    </div>
  </div>
</div>
```
