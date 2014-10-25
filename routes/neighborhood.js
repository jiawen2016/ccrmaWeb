exports.viewneighborhood = function(req, res) {
 var name = req.params.name; 
  console.log("The neighborhood name is: " + name);
  res.render('neighborhood', {
    'neighborhoodName': name,
    'neighborhoods': [
      { 
        'image': '/images/'+name+'.jpg',
        'id': name
      },
      ]  
  });
};
  
