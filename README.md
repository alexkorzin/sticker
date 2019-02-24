# sticker
Library to create funny sticky (parallax) hover effect.

# [Examples](https://codepen.io/alexkorzin/pen/XOLxvL)

## Getting startd
### 1. Include `sticker.js` into your project:
```html
<script src="js/sticker.js"></script>
```
or in your `app.js`

```javascript
import Sticker from './sticker'
```
#### Also include a TimelineMax from GSAP
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
```
or 
```javascript
import {TweenMax} from "gsap/TweenMax";
```
### 2. Create your buttons
```html
<div data-sticky="12" class="button sticky_w">
    <div class="button_text sticky_t">I'M JUST STICKY...</div>
</div>
```
Add class `sticky_w` and `data-sticky`attr to your "sticky" button's wrapper. Add class `sticky_t` to your button's content
### 3. Style your button with CSS.
### 4. init `Sticker`
```javascript
new Sticker({
    inertion: 0.5,   // Inertion force (from 0.5 to 15 recomended)
    spring: 0.5      // Spring force (from 0.5 to 3 recomended)
});
```
