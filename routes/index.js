/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'projects': [
      { 'name': 'Ribbon Dance Sound Visualizer',
        'image': 'screen3.png',
        'id': 'project1'
      },
      
    ]  
  })};
