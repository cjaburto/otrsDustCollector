(function(){var t,e,n,i,r,o;i=new Date,r=function(){var t,e;return t=new Date,e=t-i,e/=1e3},t=require("casper").create({verbose:!0,logLevel:"debug"}),t.options.viewportSize={width:1024,height:600},t.options.timeout=9e4,e={},o="cjaque",n="kkpura",t.start("http://10.0.0.22/otrs/index.fpl"),t.on("error",function(t){var e;return e=r(),console.log(t+" | time="+e),this.exit(2)}),t.then(function(){return this.sendKeys("input[name='User']:nth-child(1)",o)}),t.then(function(){return this.sendKeys("input[type='password']",n)}),t.then(function(){return this.click("input.button:nth-child(2)")}),t.then(function(){return this.wait(5e3)}),t.then(function(){return this.click("div[title='Ticket-Area'] a")}),t.then(function(){return this.wait(5e3)}),t.then(function(){var t,n;return t=this.evaluate(function(){return document.querySelectorAll(".mainhead").length}),n=Math.floor(t/3),e.elements=n}),t.then(function(){var t,n,i,r,o,u,a,c;for(u=7,c=/respuesta automática|]\n\s\s\s\s\s\s\s\s\s\s\s alerta|no se puede entregar|Undeliverable|AntiPortonazo|UPS|Fuera de la oficina|Ausente|Delayed|Entrega retrasada|Análisis Modificaciones Ley/gi,o=[],t=n=1,i=e.elements;1<=i?n<=i:n>=i;t=1<=i?++n:--n)a=this.fetchText("table:nth-child("+u+") tbody td.mainhead:nth-child(2)"),r=c.test(a),console.log(a),r===!0&&this.click("table:nth-child("+u+") tbody td.mainhead:nth-child(1) form input[type='checkbox']"),o.push(u+=3);return o}),t.then(function(){return this.click("input[name='BulkAktion']")}),t.then(function(){return this.wait(5e3)}),t.then(function(){return this.sendKeys("input[name='Subject']","Close")}),t.thenEvaluate(function(){return document.querySelector("iframe").contentWindow.document.body.innerHTML="Gestión interna monitoreo<br>Cj"}),t.thenEvaluate(function(){return document.querySelector("#StateID option[value='2']").selected=!0}),t.then(function(){return this.click("input#submitRichText")}),t.wait(5e3).run()}).call(this);