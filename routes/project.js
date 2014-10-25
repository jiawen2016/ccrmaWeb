exports.viewBorough = function(req, res) {
 var name = req.params.name; 
  //console.log("The project name is: " + name);
  res.render('borough', {
    'boroughName': name,
    'projects': [
      { 'name': 'Ribbon Dance Sound Visualizer',
        'image1': 'screenshot2.png',
        'image2': 'screen5.png',
        'id': 'project1'
      },
      ]  
  });
};
  
