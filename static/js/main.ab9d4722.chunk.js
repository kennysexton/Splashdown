(window.webpackJsonpsplashdown=window.webpackJsonpsplashdown||[]).push([[0],[,,,,,,,,function(a,e,n){a.exports=n(16)},,,,,function(a,e,n){},function(a,e,n){},function(a,e,n){},function(a,e,n){"use strict";n.r(e);var t=n(0),i=n.n(t),r=n(7),o=n.n(r),c=(n(13),n(1)),u=n(2),s=n(4),h=n(3),l=n(5),d=(n(14),n(15),function(a){function e(a){return Object(c.a)(this,e),Object(s.a)(this,Object(h.a)(e).call(this,a))}return Object(l.a)(e,a),Object(u.a)(e,[{key:"render",value:function(){return i.a.createElement("header",{className:"City-Name"},i.a.createElement("h1",null,this.props.data))}}]),e}(t.Component)),m=function(a){return i.a.createElement("div",{style:{background:"url("+a.url+") no-repeat center center fixed",backgroundSize:"cover"},className:"bg"})},p=function(a){var e=a.data.map(function(a){return i.a.createElement(m,{url:a.urls.full,alt:a.alt_description,user:a.user.links.html,name:a.user.name,width:a.width,height:a.height,key:a.id})});return i.a.createElement("div",null,e[0])},g=function(a){function e(a){return Object(c.a)(this,e),Object(s.a)(this,Object(h.a)(e).call(this,a))}return Object(l.a)(e,a),Object(u.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"weather-information"},i.a.createElement("h2",null,this.props.weather),i.a.createElement("img",{className:"weather-icon",src:"https://openweathermap.org/img/wn/"+this.props.icon+"@2x.png",alt:"current weather icon"}))}}]),e}(t.Component);t.Component;var f=["Hong Kong, China","Singapore","Bangkok, Thailand","London, United Kingdom","Paris, France","Macau","New York City, USA","Shenzhen, China","Kuala Lumpur, Malaysia","Antalya, Turkey","Istanbul, Turkey","Dubai, United Arab Emirates","Seoul, South Korea","Rome, Italy","Phuket, Thailand","Guangzhou, China","Mecca, Saudi Arabia","Pattaya, Thailand","Taipei, Taiwan","Miami, USA","Prague, Czech Republic","Shanghai, China","Las Vegas, USA","Milan, Italy","Barcelona, Spain","Moscow, Russia","Amsterdam, Netherlands","Vienna, Austria","Venice, Italy","Los Angeles, USA","Lima, Peru","Tokyo, Japan","Johannesburg, South Africa","Beijing, China","Sofia, Bulgaria","Orlando, USA","Berlin, Germany","Budapest, Hungary","Ho Chi Minh City, Vietnam","Florence, Italy","Madrid, Spain","Warsaw, Poland","Doha, Qatar","Nairobi, Kenya","Delhi, India","Mumbai, India","Chennai, India","Mexico City, Mexico","Dublin, Ireland","San Francisco, USA","Hangzhou, China","Denpasar, Indonesia","St.Petersburg, Russia","Mu\u011fla, Turkey","Brussels, Belgium","Burgas, Bulgaria","Munich, Germany","Zhuhai, China","Sydney, Australia","Edirne, Turkey","Toronto, Canada","Lisbon, Portugal","Canc\xfan, Mexico","Buenos Aires, Argentina","Cairo, Egypt","Punta Cana, Domincan Republic","Suzhou, China","Djerba, Tunisia","Agra, India","Krak\xf3w, Poland","Bucharest, Romania","Siem Reap, Cambodia","Jaipur, India","Honolulu, USA","Manama, Bahrain","Dammam, Saudi Arabia","Hanoi, Vietnam","Andorra La Vella, Andorra","Nice, France","Z\xfcrich, Switzerland","Jakarta, Indonesia","Manila, Philippines","Chiang Mai, Thailand","Marrakech, Morocco","Sharm El Sheikh, Egypt","Frankfurt, Germany","Abu Dhabi, United Arab Emirates","Vancouver, Canada","Guilin, China","Melbourne, Australia","Rio De Janeiro, Brazil","Riyadh, Saudi Arabia","Amman, Jordan","Sousse, Tunisia","Kiev, Ukraine","Sharjah, United Arab Emirates","Jeju Island, South Korea","Krabi, Thailand","Artvin, Turkey"];function b(){var a=f.length,e=Math.floor(Math.random()*a);return console.log(e),f[e]}function y(a){return Math.round(a)}var w=function(a){function e(){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(h.a)(e).call(this))).state={imgs:[],city:b()},a}return Object(l.a)(e,a),Object(u.a)(e,[{key:"componentDidMount",value:function(){var a=this;console.log("Shown City:  "+this.state.city),fetch("https://api.unsplash.com/search/photos/?page=1$per_page=1&query="+this.state.city+"&client_id=51e13758bf8016eb55dde3f96b90895260da9653919f48fd0f038e699affa885").then(function(a){return a.json()}).then(function(e){a.setState({imgs:e.results})}).catch(function(a){console.log("Error happened during fetching from unsplash!",a)}),fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&units=imperial&apiKey=d875d116fe805dc39cc991c2ce8b7395").then(function(a){return a.json()}).then(function(e){a.setState({weather:e.main.temp}),a.setState({icon:e.weather[0].icon})}).catch(function(a){console.log("Error happened during fetching from open weather!",a)})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(p,{data:this.state.imgs}),i.a.createElement(d,{data:this.state.city}),i.a.createElement(g,{weather:y(this.state.weather)+"\xb0F",icon:this.state.icon}))}}]),e}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.ab9d4722.chunk.js.map