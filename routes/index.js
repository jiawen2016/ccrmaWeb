/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'projects': [
      { 'name': 'Ribbon Dance Sound Visualizer',
        'image': 'screenshot1.png',
        'id': 'project1'
      },
      
    ]  
  });
  res.render('project', {
    'projects': [
      { 'name': 'Ribbon Dance Sound Visualizer',
        'image': 'screenshot2.png',
        'id': 'project1'
      },
      
    ]  
  });
};
