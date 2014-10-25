exports.viewborough = function(req, res) {
 var name = req.params.name; 
  //console.log("The project name is: " + name);
  res.render('borough', {
    'boroughName': name,
    
  });
};

function gen() {
  alert("hi");
  var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  port     : '3307'
});
connection.connect();

connection.query('use mydb');
var strQuery = "Select count(*),complaint_type FROM Data WHERE (incident_zip = 10018 OR incident_zip = 10001) GROUP BY complaint_type ORDER BY count(*) DESC";

connection.query(strQuery).addCallback(function(results){
    names = [];
    values = [];
    var l = results.ROWS.length;
    for (var i = 0; i < l; i++) {
      var row  = results.ROWS[i];
      names.push(row[1]);
      values.push(row[0]);
      console.log(row);
    }
    console.log(names);
    console.log(values);
});


}
  
