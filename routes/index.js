/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'boroughs': [
      { 'name': 'Manhattan',
        'image': '/images/lorempixel.jumbotron.jpeg',
        'id': 'borough1'
      },
      
    ]  
  })};
