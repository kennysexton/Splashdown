(window.webpackJsonpsplashdown=window.webpackJsonpsplashdown||[]).push([[0],{13:function(a,e,n){},14:function(a,e,n){},15:function(a,e,n){"use strict";n.r(e);var t=n(0),i=n.n(t),r=n(7),o=n.n(r),l=(n(13),n(1)),u=n(2),c=n(4),s=n(3),d=n(5),h=(n(14),function(a){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(d.a)(e,a),Object(u.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"Welcome"},i.a.createElement("h1",null,"Splashdown"),i.a.createElement("button",{href:"#colordiv","data-aos":"fade-up","data-aos-duration":"1000",className:"welcome-button "},"Generate Color Scheme")))}}]),e}(t.Component)),m=function(a){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(d.a)(e,a),Object(u.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"Color-main",id:"colordiv"},i.a.createElement("div",{"data-aos":"fade-up",className:"Color-swatch blue"}),i.a.createElement("div",{"data-aos":"fade-up",className:"Color-swatch green"}),i.a.createElement("div",{"data-aos":"fade-up",className:"Color-swatch blue"}),i.a.createElement("div",{"data-aos":"fade-up",className:"Color-swatch green"}),i.a.createElement("div",{"data-aos":"fade-up",className:"Color-swatch blue "}))}}]),e}(t.Component),p=function(a){return i.a.createElement("div",{className:"left",width:a.width,"ata-aos":"fade-up"},i.a.createElement("img",{src:a.url,alt:a.alt}))},b=function(a){var e=a.data.map(function(a){return i.a.createElement(p,{url:a.urls.small,alt:a.alt_description,user:a.user.links.html,name:a.user.name,width:a.width,height:a.height,icon:a.user.profile_image.small,key:a.id})});return i.a.createElement("section",{className:"img-grid"},e)},f=["Hong Kong, China","Singapore","Bangkok, Thailand","London, United Kingdom","Paris, France","Macau","New York City, USA","Shenzhen, China","Kuala Lumpur, Malaysia","Antalya, Turkey","Istanbul, Turkey","Dubai, United Arab Emirates","Seoul, South Korea","Rome, Italy","Phuket, Thailand","Guangzhou, China","Mecca, Saudi Arabia","Pattaya, Thailand","Taipei, Taiwan","Miami, USA","Prague, Czech Republic","Shanghai, China","Las Vegas, USA","Milan, Italy","Barcelona, Spain","Moscow, Russia","Amsterdam, Netherlands","Vienna, Austria","Venice, Italy","Los Angeles, USA","Lima, Peru","Tokyo, Japan","Johannesburg, South Africa","Beijing, China","Sofia, Bulgaria","Orlando, USA","Berlin, Germany","Budapest, Hungary","Ho Chi Minh City, Vietnam","Florence, Italy","Madrid, Spain","Warsaw, Poland","Doha, Qatar","Nairobi, Kenya","Delhi, India","Mumbai, India","Chennai, India","Mexico City, Mexico","Dublin, Ireland","San Francisco, USA","Hangzhou, China","Denpasar, Indonesia","St.Petersburg, Russia","Mu\u011fla, Turkey","Brussels, Belgium","Burgas, Bulgaria","Munich, Germany","Zhuhai, China","Sydney, Australia","Edirne, Turkey","Toronto, Canada","Lisbon, Portugal","Canc\xfan, Mexico","Buenos Aires, Argentina","Cairo, Egypt","Punta Cana, Domincan Republic","Suzhou, China","Djerba, Tunisia","Agra, India","Krak\xf3w, Poland","Bucharest, Romania","Siem Reap, Cambodia","Jaipur, India","Honolulu, USA","Manama, Bahrain","Dammam, Saudi Arabia","Hanoi, Vietnam","Andorra La Vella, Andorra","Nice, France","Z\xfcrich, Switzerland","Jakarta, Indonesia","Manila, Philippines","Chiang Mai, Thailand","Marrakech, Morocco","Sharm El Sheikh, Egypt","Marne-La-Vall\xe9e, France","Frankfurt, Germany","Abu Dhabi, United Arab Emirates","Vancouver, Canada","Guilin, China","Melbourne, Australia","Rio De Janeiro, Brazil","Riyadh, Saudi Arabia","Amman, Jordan","Sousse, Tunisia","Kiev, Ukraine","Sharjah, United Arab Emirates","Jeju Island, South Korea","Krabi, Thailand","Artvin, Turkey"];function g(){var a=f.length,e=Math.floor(Math.random()*a);return console.log(e),f[e]}var y=function(a){function e(){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(s.a)(e).call(this))).state={imgs:[],city:g()},a}return Object(d.a)(e,a),Object(u.a)(e,[{key:"componentDidMount",value:function(){var a=this;fetch("https://api.unsplash.com/photos/?client_id=51e13758bf8016eb55dde3f96b90895260da9653919f48fd0f038e699affa885").then(function(a){return a.json()}).then(function(e){a.setState({imgs:e})}).catch(function(a){console.log("Error happened during fetching!",a)})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h,null),i.a.createElement(m,null),i.a.createElement(b,{data:this.state.imgs}),this.state.city)}}]),e}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})},8:function(a,e,n){a.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.45a4b08d.chunk.js.map