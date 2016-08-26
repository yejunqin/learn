/**
 * Created by Administrator on 2016/8/2.
 */
var express    = require('express')
var superagent = require('superagent')
var cheerio    = require('cheerio')
var eventproxy = require('eventproxy')
var url 			 = require('url')
var app        = express()

var cnodeUrl = 'https://cnodejs.org/'

app.get('/test', function(req,res){
  console.log(req.query)
  console.log(req.body)
  res.send(req.query)
})
app.get('/', function(req, res){
	superagent.get(cnodeUrl)
		.end(function(err, sres){
			if(err){
				return next(err)
			}
			var $ = cheerio.load(sres.text)
			var items = []
			$('#topic_list .topic_title').each(function(idx, ele){
				var $ele = $(ele)
				var href = url.resolve(cnodeUrl, $ele.attr('href'))
				items.push(href)
			})
			var ep = new eventproxy()
			ep.after('topic_html', items.length, topics => {
				topics = topics.map(topicPair => {
					var topicUrl = topicPair[0]
					var topicHtml = topicPair[1]
					var $ = cheerio.load(topicHtml)
					return {
						title: $('.topic_full_title').text().trim(),
						href: topicUrl,
						comment1: $('.reply_content').eq(0).text().trim()
					}
				})
				console.log(topics)
				res.send(topics)
			})
			items.forEach(topicUrl => {
				superagent.get(topicUrl).end((err, res) => {
					ep.emit('topic_html', [topicUrl, res.text])
				})
			})
		})
})
app.listen(3000, function(){
  console.log('listening at port 3000')
})
var fibonacci = function(n){
	if(isNaN(+n)){
		throw 'not a number'
	}
	if(n === 0){
		return 0
	}else if(n === 1){
		return 1
	}else{
		return arguments.callee(n - 1) + arguments.callee(n - 2)
	}
}
