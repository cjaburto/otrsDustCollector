startime=new Date()

time = ->
	endtime=new Date()
	runms=endtime - startime
	runms /=1000
	return runms

casper = require('casper').create
  verbose : true
  logLevel : "debug"
casper.options.viewportSize = width:1024 , height:600
casper.options.timeout = 90000

#url	= casper.cli.get 'url'
gen   = {}
user  = 'cjaque'
pass  = 'kkpura'

casper.start "https://10.0.0.25/otrs/index.fpl"

casper.on 'error' , (e)->
	runtime=time()
	console.log "#{e} | time=#{runtime}"
	@exit 2

casper.then -> @sendKeys "input[name='User']:nth-child(1)" , user

casper.then -> @sendKeys "input[type='password']" , pass

casper.then -> @click "input.button:nth-child(2)"

casper.then -> @wait 5000

casper.then -> @click "div[title='Ticket-Area'] a"

casper.then -> @wait 5000

casper.then ->
  elements  = @evaluate -> document.querySelectorAll('.mainhead').length
  total     = Math.floor elements / 3
  gen.elements = total
  
casper.then ->
  table = 7
  textRegex = /respuesta automática|]\n\s\s\s\s\s\s\s\s\s\s\s alerta|no se puede entregar|UPS test completed|Undeliverable|estoy ausente|AntiPortonazo/gi
  for i in [1..gen.elements]
    text    = @fetchText "table:nth-child(#{table}) tbody td.mainhead:nth-child(2)"
    result  = textRegex.test text
    console.log text
    if result is true
      @click "table:nth-child(#{table}) tbody td.mainhead:nth-child(1) form input[type='checkbox']"
    table += 3

casper.then -> @click "input[name='BulkAktion']"

casper.then -> @wait 5000

casper.then -> @sendKeys "input[name='Subject']" , 'Close'

casper.thenEvaluate ->
  document.querySelector('iframe').contentWindow.document.body.innerHTML="Gestión interna monitoreo<br>Cj"

casper.thenEvaluate ->
  document.querySelector("#StateID option[value='2']").selected=true

casper.then -> @click "input#submitRichText"

casper.wait 5000
 
.run()
