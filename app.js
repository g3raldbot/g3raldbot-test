const Twit = require('twit');

const client = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
 
client.post('statuses/update', { status: 'Hello World!' }, function(err, data, response) {
  console.log(data)
})