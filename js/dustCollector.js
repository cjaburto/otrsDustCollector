(function(){var t,e,n,i,r,u;i=new Date,r=function(){var t,e;return t=new Date,e=t-i,e/=1e3},t=require("casper").create({verbose:!0,logLevel:"debug"}),t.options.viewportSize={width:1024,height:600},t.options.timeout=9e4,e={},u="cjaque",n="kkpura",t.start("https://10.0.0.25/otrs/index.fpl"),t.on("error",function(t){var e;return e=r(),console.log(t+" | time="+e),this.exit(2)}),t.then(function(){return this.sendKeys("input[name='User']:nth-child(1)",u)}),t.then(function(){return this.sendKeys("input[type='password']",n)}),t.then(function(){return this.click("input.button:nth-child(2)")}),t.then(function(){return this.wait(5e3)}),t.then(function(){return this.click("div[title='Ticket-Area'] a")}),t.then(function(){return this.wait(5e3)}),t.then(function(){var t,n;return t=this.evaluate(function(){return document.querySelectorAll(".mainhead").length}),n=Math.floor(t/3),e.elements=n}),t.then(function(){var t,n,i,r,u,o,c,s;for(o=7,s=/respuesta automática|]\n\s\s\s\s\s\s\s\s\s\s\s alerta|no se puede entregar|Undeliverable|estoy ausente|AntiPortonazo|UPS|Fuera de la oficina/gi,u=[],t=n=1,i=e.elements;i>=1?i>=n:n>=i;t=i>=1?++n:--n)c=this.fetchText("table:nth-child("+o+") tbody td.mainhead:nth-child(2)"),r=s.test(c),console.log(c),r===!0&&this.click("table:nth-child("+o+") tbody td.mainhead:nth-child(1) form input[type='checkbox']"),u.push(o+=3);return u}),t.then(function(){return this.click("input[name='BulkAktion']")}),t.then(function(){return this.wait(5e3)}),t.then(function(){return this.sendKeys("input[name='Subject']","Close")}),t.thenEvaluate(function(){return document.querySelector("iframe").contentWindow.document.body.innerHTML="Gestión interna monitoreo<br>Cj"}),t.thenEvaluate(function(){return document.querySelector("#StateID option[value='2']").selected=!0}),t.then(function(){return this.click("input#submitRichText")}),t.wait(5e3).run()}).call(this);