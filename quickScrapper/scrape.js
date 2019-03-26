const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')


    axios.get('https://square-enix-games.com/')
    .then(r => r.data)
      .then(r => {
          const $ = cheerio.load(r)
          $('div.feed_Social_3YB8A').each(elem => {
              console.log($(elem).children('contentContainer_Social_3eiwa').children('content_Social_1z3WP').text())
            })
        })  


.catch(e => console.error(e))

  
