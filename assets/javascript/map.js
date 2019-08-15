fetch(`https://www.mapquestapi.com/traffic/v2/incidents?&outFormat=json&boundingBox=37.94825860485678%2C-122.08591461181639%2C37.7897092979573%2C-122.45498657226561&filters=incidents%2Cevent%2Ccongestion&key=${mqKey}`).then(function(res){
console.log("incident")
})
