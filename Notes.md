# Vue.js

## CDN:
- crteate a folder and insde that folder create your basic .html, .js and .css files
- connect them to the .html.
- include the cdn in the html file head: https://vuejs.org/guide/quick-start.html#creating-a-vue-application

```html
<script src="https://unpkg.com/vue@next"></script>
```
- in the js file build the app by calling the createApp function of Vue:
    - in order for this to work you might need to wrap the fuctions in window.onload function
### Declaring data:   

- the data function will hold all the data that wanst to be used in the app.
```js
window.onload = function() {
  const app = Vue.createApp({
    data() {
      return {
        valueToReturn: "Hello"
      }
    }
  })

  app.mount("#app")
}

```

### Catch the data in the html:

- a bit of a twig looking syntax:
- notice that the div id matches the argument passed in the app.mount function.

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
  Hello world
  <script src="script.js"></script>

  <div id="app">
    {{valueToReturn}}
  </div>

  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
</body>

</html>
```

### Created function:

- the created fuction wil run once the vue app is created.

```js
window.onload = function() {
  const app = Vue.createApp({
    data() {
      return {

        someValue: "Created"
      }
    },
    created() {
      console.log(this.someValue)
    }
  })

  app.mount("#app")
}
```

### object oriented changes:

```js
const MyFirstVueApp = {
      data() {
      return {
        text: "My First Vue App!",
      }
    }
}

window.onload = function() {
  Vue.createApp(MyFirstVueApp).mount("#app")
}
```

### mounted function:

- the mounted function will start running once the app its mount and will restart with each window reload.

```js
const Timer = {
  data() {
    return {
      title: "Timer App",
      timer: 0,
    }

  },
  mounted() {
    setInterval(() => {
      this.timer++
    }, 1000)
  }
}

window.onload = function() {
  Vue.createApp(Timer).mount("#timer")
}
```

### Reactive behavior:

```js
const ReactiveBehavior = {
  data() {
    return {
      onHoverText: "ReactiveBehavior",
    }
  },
}

window.onload = function() {
  Vue.createApp(ReactiveBehavior).mount("#to-hover-element")
}
```

```html
  <div id="to-hover-element">
    <span v-bind:title="onHoverText">Hover over me</span>
  </div>
```


### Enable User interaction:

```html
  <div id="textToReverse">
    <p>{{text}}</p>
    <button v-on:click="checkPalindrome">
      Check If Palindrome
    </button>
  </div>
```

```js
const TextToReverse = {
  data() {
    return {
      text: "racecars",
    }
  },
  methods:{
    checkPalindrome(){
      this.text = this.text.split("").reverse().join("");
    }
  }
};

window.onload = function() {
  Vue.createApp(TextToReverse).mount("#textToReverse")
}
```

### User Inputs:
```html
  <div id="inputForm">
    <h1>{{title}}</h1>
    <p>{{inputText}}</p>
    <input v-model="inputText" />
  </div>
```

```js
const UserInput = {
  data() {
    return {
      title:"User Inputs",
      inputText: "Type here",
    }
  },
  methods:{
    checkPalindrome(){
      this.text = this.text.split("").reverse().join("");
    }
  }
};

window.onload = function() {
  Vue.createApp(UserInput).mount("#inputForm")
}
```
### Conditional rending:

```html
  <div id="conditionalVisibility">
    <h1>{{title}}</h1>
    <div v-if="visible" class="danger">"Visible Content"</div>
    <button v-on:click="changeVisibility">Show / Hide</button>
  </div>
```

```js
const Conditional = {
  data() {
    return {
      title:"Hide or Show with conditionals",
      visible: true,
    }
  },
  methods:{
    changeVisibility(){
      this.visible=!this.visible
    }
  }
};

window.onload = function() {
  Vue.createApp(Conditional).mount("#conditionalVisibility")
}
```

### Looping through a list:

```html
  <div id="list">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="eachItem in listItems">
        {{eachItem.item}}
      </li>
    </ul>
  </div>
```

```js
const List = {
  data() {
    return {
      title:"Build a list",
      listItems: [
        {item:"Item one"},
        {item:"Item two"},
        {item:"Item three"},
      ],
      arrayItems:["array one", "array two", "array three"]
    }
  },
  methods:{
    changeVisibility(){
      this.visible=!this.visible
    }
  }
};

window.onload = function() {
  Vue.createApp(List).mount("#list")
}
```

### Interpolate text with HTML:

```html
  <div id="app">
    <h1>{{title}}</h1>
    <span v-html="html"></span>
  </div>
```

```js
const InterpolateApp = {
  data() {
    return {
      title:"Interpolate text with HTML",
      html: "<span class='danger'> Danger Text </span>"
    }
  },

};

window.onload = function() {
  Vue.createApp(InterpolateApp).mount("#app")
}
```

### Handle and modify data properties:

```html
  <div id="app">
    <h1>{{title}}</h1>
    <span v-html="html"></span>
  </div>
```

```js
const DataProperties = {
  data() {
    return {
      title:"Handle and modify data properties",
      value: 0
    }
  },
};

window.onload = function() {
const appInstance = Vue.createApp(DataProperties).mount("#app")

  appInstance.value = 10;
  console.log( appInstance.$data.value )
  appInstance.$data.value = 100;
  console.log( appInstance.value )
}
```
### Method creation:

```html
  <div id="app">
    <h1>{{title}}</h1>
    <div>{{sampleString}}!</div>
    <button v-on:click="addToString">Add to string</button>
  </div>
```

```js
window.onload = function() {
const App = Vue.createApp({
  data(){
    return {
      title:"Adding string",
      sampleString:""
    }
  },
  methods:{
    addToString(){
      this.sampleString += ", Hello";
      console.log(App.sampleString)
    }
  },
      mounted() {
      this.sampleString = "Hello"
    }
})
  .mount("#app")

  console.log(App.sampleString)
}
```

### Debouncing with lodash:

- start by including lodash cdn in the html template:

```html
<script src="https://unpkg.com/lodash@4.17.20/lodash.min.js"></script>
```
- the rest of the class wasnt very clear:

```js
app.component("submitButton", {
    created(){
        this.debouncedClick = _.debounce(this.click, 300)
    },
    unmounted({
        this.debouncedClick.cancel()
    })
})
```

### Loop in a range:

```html
  <div id="loop-range">
    <h1>{{title}}</h1>
    <div v-for="number in 20"> {{number}} </div>
  </div>
```

```js
window.onload = function() {
  const App = Vue.createApp({
    data() {
      return {
        title: "Loop through a range",
      }
    },
  })
    .mount("#loop-range")
}
```

### Loop through an array:

```html
  <div id="loop-range">
    <h1>{{title}}</h1>
    <div v-for="item in items"> {{item}} </div>
  </div>
```

```js
window.onload = function() {
  const App = Vue.createApp({
    data() {
      return {
        title: "Loop through an array",
        items:[1,2,3,4,5,6,7,8,9,0]
      }
    },
  })
    .mount("#loop-range")
}
```

### Adding indexes:

```html
  <div id="loop-range">
    <h1>{{title}}</h1>
    <div v-for="item in items"> {{item}} </div>
  </div>
```

```js
window.onload = function() {
  const App = Vue.createApp({
    data() {
      return {
        title: "Loop through an array",
        items:[1,2,3,4,5,6,7,8,9,0]
      }
    },
  })
    .mount("#loop-range")
}
```

### Loop list of objects and index:

```html
  <div id="loop-object">
    <h1>{{title}}</h1>
    <div v-for="(item, index) in items"> {{index}} - {{item.content}} </div>
  </div>
```

```js
window.onload = function() {
  const App = Vue.createApp({
    data() {
      return {
        title: "Loop list of objects and index",
        items: [
          { content: "Hello" },
          { content: "Hi" },
          { content: "Hola" }
        ]
      }
    },
  })
    .mount("#loop-object")
}
```

### Loop through a single object:

```html
  <div id="loop-object">
    <h1>{{title}}</h1>
    <div v-for="value in object"> {{value}} </div>
  </div>
```

```js
window.onload = function() {
  const App = Vue.createApp({
    data() {
      return {
        title: "Loop values of a single object",
        object: {
          content1: "Hello",
          content2: "Hi",
          content3: "Hola",
        }
      }
    },
  })
    .mount("#loop-object")
}
```

### Loop through a single object key and index:

```html
  <div id="loop-object-key-value">
    <h1>{{title}}</h1>
    <div v-for="(value, key) in object"> {{key}} : {{value}}
    </div>
  </div>
```

```js
window.onload = function() {
  const App = Vue.createApp({
    data() {
      return {
        title: "Loop through a single object key and index",
        object: {
          content1: "Hello",
          content2: "Hi",
          content3: "Hola",
        }
      }
    },
  })
    .mount("#loop-object-index-value")
}
```


### Text Area:
- in order to get the brake lines correctly in a <p> you need to go to css and declare:

```css
p {
  white-space: pre-line;
}
```

```html
  <div id="textarea">
    <h1>{{title}}</h1>
    <textarea v-model="inputText" placehodel="your text"></textarea>
    <p>{{inputText}}</p>
  </div>
```

```js
window.onload = function() {
  const App = Vue.createApp({
    data() {
      return {
        title: "Text Area",
        inputText:""
      }
    },
  })
    .mount("#textarea")
}
```

### Drop menu:

```html
  <div id="drop-menu">
    <h1>{{title}}</h1>
    <p>How did you hear about us?</p>
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
        {{option.text}}
      </option>
    </select>
  </div>
```

```js
window.onload = function() {
  const App = Vue.createApp({
    data() {
      return {
        title: "Drop menu",
        selected: "Search",
        options: [
          {
            text: "From a search engine",
            value: "Search"
          },
          {
            text: "from a friend",
            value: "frien"
          },
          {
            text: "Other",
            value: "other"
          }
        ]
      }
    },
  })
    .mount("#drop-menu")
}
```


### Check Boxes:

```html
  <div id="check-box">
    <h1>{{title}}</h1>
    <p>who is this message for?</p>

    <div>
      <input type="checkbox" id="it" value="IT team" v-model="checkedOptions" />
      <label for="question">
        IT team
      </label>
    </div>

    <div>
      <input type="checkbox" id="questions" value="Designer team" v-model="checkedOptions" />
      <label for="question">
        Designer team
      </label>
    </div>

    <div>
      <input type="checkbox" id="questions" value="Developers team" v-model="checkedOptions" />
      <label for="question">Developers team</label>
    </div>

    <div v-for="(checkedOption, index) in checkedOptions">{{index}} - {{checkedOption}}</div>
  </div>
```

```js
window.onload = function() {
  const App = Vue.createApp({
    data() {
      return {
        title: "Check Boxes",
        checkedOptions: []
      }
    },
  })
    .mount("#check-box")
}
```

### Radio buttons:

```html
  <div id="radio-buttons">
    <h1>{{title}}</h1>
    <p>who is this message for?</p>

    <div>
      <input type="radio" id="it" value="IT team" v-model="radioButtonPicked" />
      <label for="question">
        IT team
      </label>
    </div>

    <div>
      <input type="radio" id="questions" value="Designer team" v-model="radioButtonPicked" />
      <label for="question">
        Designer team
      </label>
    </div>

    <div>
      <input type="radio" id="questions" value="Developers team" v-model="radioButtonPicked" />
      <label for="question">Developers team</label>
    </div>

    <div>{{radioButtonPicked}}</div>
  </div>
```

```js
window.onload = function() {
  const App = Vue.createApp({
    data() {
      return {
        title: "Radio Buttons",
        radioButtonPicked: "None"
      }
    },
  })
    .mount("#radio-buttons")
}
```

### Vue Component:

- in this case the title variable doesnt work because the handle bars are not inside the template.
- app.component object is declared as component so only templates will work here.

```html
  <div id="my-first-div">
    <h1>{{title}}</h1>
    <my-first-component>

    </my-first-component>
  </div>
```

```js
window.onload = function() {
  const app = Vue.createApp({})

  app.component("my-first-component", {
    data() {
      return {
        title: "My first Component",
        propertyName: 0,
      }
    },
    template: `
    <div>
      <h1>{{title}}</h1>
      <button  @click="propertyName++">
        Clicked {{propertyName}} times
        </button>
    </div>
    `
  })

  app.mount("#my-first-div")
}
```

### Reusing a Component:

- in this case the title variable was declared in the app.data instead of the component and it works as normal.


```html
  <div id="my-first-div">
    <h1>{{title}}</h1>
    <my-first-component>

    </my-first-component>
  </div>
```

```js
window.onload = function() {
  const app = Vue.createApp({})

  app.component("my-first-component", {
    data() {
      return {
        title: "My first Component",
        propertyName: 0,
      }
    },
    template: `
    <div>
      <h1>{{title}}</h1>
      <button @click="propertyName++">
        Clicked {{propertyName}} times
        </button>
    </div>
    `
  })

  app.mount("#my-first-div")
}
```

### Component Props:

- props are passed as normal throught html, seems like that might get mesy


```html
  <div id="component-props-div">
    <h1>{{title}}</h1>
    <header-component title="Use props value here"></header-component>
    <header-component title="Use another props value here"></header-component>
  </div>
```

```js
window.onload = function() {
  const app = Vue.createApp({
    data() {
      return {
        title: "Component Props",
      }
    },
  })

  app.component("header-component", {
    data() {
      return {
        propertyName: 0,
      }
    },
    props: ["title"],
    template: `<h3>{{title}}</h3>`
  })

  app.mount("#component-props-div")
}
```

### Emit Event:

- not quite the even I wanted but at least same as teachers


```html
  <div id="emit-event-div">
    <h1>{{title}}</h1>
    <div :style="{ fontSize: headerFontSize + 'em' }" title="Text to modify">

      <header-component v-for="header in headers" :key="header.id" :title="header.title"
        @increase-text-size="headerFontSize += 0.25"
        @decrease-text-size="headerFontSize -= 0.25">
      </header-component>
    </div>
  </div>
```

```js
window.onload = function() {
  const app = Vue.createApp({
    data() {
      return {
        title: "Emit Event",
        headers:[
          {id:1, title: "My Header 1"},
          {id:2, title: "My Header 2"},
          {id:3, title: "My Header 3"},
        ],
        headerFontSize: 1
      }
    },
    methods:{
      
    }
    
  })

  app.component("header-component", {
    props: ["title"],
    template: `
      <div class="header-component">
        <h3>{{title}}</h3>
        <button @click="$emit('increase-text-size')">
          Increase Text Size
        </button>
        <button @click="$emit('decrease-text-size')">
          Decrease Text Size
        </button>
      </div>
    `
  })

  app.mount("#emit-event-div")
}
```

### Building slot component:

- binding is a funny concept, need to get deeper into it


```html
  <div id="slot-div">
    <h1>{{title}}</h1>
    <p>Extra text from html</p>
  </div>
```

```js
window.onload = function() {
  const app = Vue.createApp({
    data() {
      return {
        title: "Building slot component",
      }
    },
  })

  app.component("slot-component", {
    props: ["title"],
    template: `
      <div>
        this is my component
        <slot></slot>
      </div>
    `
  })

  app.mount("#slot-div")
}
```


### Dynamic component:

- I dont know how can i take advantage of this slot property yet, so notice how the html text overrides the loose text in the js template, but not the one in handle bars.


```html
  <div id="navigation-div">
    <h1>{{title}}</h1>
    <button v-for="tab in tabs" v-bind:key="tab" v-bind:class="['tab-button', {
      active: currentTab === tab
      }]" v-on:click="currentTab = tab">
      {{tab}}
    </button>
    <component v-bind:is="currentTabComponent">

    </component>
  </div>
```

```js
window.onload = function() {
  const app = Vue.createApp({
    data() {
      return {
        title: "Dynamic components",
        currentTab:"Homepage",
        tabs:["Homepage", "Products", "Contact"]
      }
    },
    computed:{
      currentTabComponent(){
        return "tab-" + this.currentTab.toLowerCase()
      }
    }
  })

  app.component("tab-homepage", {
    template: `
      <div class="navegation">
        <h3>Homepage</h3>
      </div>
    `
  })
  app.component("tab-products", {
    template: `
      <div class="navegation">
        <h3>Products</h3>
      </div>
    `
  })
  app.component("tab-contact", {
    template: `
      <div class="navegation">
        <h3>Contact</h3>
      </div>
    `
  })

  app.mount("#navigation-div")
}
```

### Building Components with Bindings:

- its the same just using object denotation and binding vue

```html
  <div id="navigation-div">
    <h1>{{title}}</h1>
    <button v-for="tab in tabs" v-bind:key="tab" v-bind:class="['tab-button', {
      active: currentTab === tab
      }]" v-on:click="currentTab = tab">
      {{tab.name}}
    </button>
    <component v-bind:is="currentTab.component">

    </component>
  </div>
```

```js

window.onload = function() {
  const tabs = [
   { 
     name:"Homepage",
     component: {
       template:`
          <div class="navegation">
            <h3>Homepage</h3>
          </div>
        `
     }
   },
   { 
     name:"Products",
     component: {
       template:`
          <div class="navegation">
            <h3>Products</h3>
          </div>
        `
      }
    },
   { 
     name:"Contact",
     component: {
       template:`
          <div class="navegation">
            <h3>Contact</h3>
          </div>
        `
      }
   }
  ]
  const app = Vue.createApp({
    data() {
      return {
        title: "Building Components with Bindings",
        currentTab:tabs[0],
        tabs
      }
    },
    computed:{
      getCurrentTab(){
        return "tab-" + this.currentTab.name.toLowerCase()
      }
    }
  })

  app.component("tab-homepage", {
    template: `
          <div class="navegation">
            <h3>Homepage</h3>
          </div>
        `
  })
  app.component("tab-products", {
    template: `
          <div class="navegation">
            <h3>Products</h3>
          </div>
        `
  })
  app.component("tab-contact", {
    template:`
          <div class="navegation">
            <h3>Contact</h3>
          </div>
        `
  })

  app.mount("#navigation-div")
}
```