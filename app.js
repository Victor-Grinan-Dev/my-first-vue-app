
window.onload = function() {
    const app = Vue.createApp({
      data() {
        return {
          title: "Building a landing page",
          cards:[
            {
                title:"Vue",
                link:{
                    url:"https://certification.vuejs.org/?utm_source=vuejs&utm_medium=website&utm_campaign=affiliate&utm_content=top_banner&banner_type=top&friend=VUEJS",
                    src:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"
                },
                text:"Complete component-based User Interface framework. includes more core features. More common at start-ups than big companies."
            },
            {
                title:"React",
                link:{
                    url:"https://react.dev/",
                    src:"https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png"
                },
                text:"Lean, component-based User Interface library. Developed by Facebook. Must add some features via packages."
            },
            {
                title:"Angular",
                link:{
                    url:"https://angular.io/",
                    src:"https://angular.io/assets/images/logos/angular/angular.svg"
                },
                text:"Complete component-based User Interface Framework.Includes many features for large projects. Code with typescript."
            },
          ]
        }
      }
    })
  
    app.component("cards-component", {
        props:[
            'title',
            'link',
            'text',
        ],
        template:`
        <div class="card">
            <h2>{{title}}</h2>

            <img v-bind:src="link.src" />

            <p>{{text}}</p>

            <a :href="link.url" target="blank">
                <button> {{title}} website </button>
            </a>
        </div>
        `
    })
    app.mount("#app")
  }