const shortestDistance = values => {
    
    if (isNaN(values.x1) || isNaN(values.y1) || isNaN(values.x2) || isNaN(values.y2)) {
        throw new TypeError('Expected numerical inputs but recieved something else');
    }
    
    return Math.sqrt( ( (values.x2 - values.x1) * (values.x2 - values.x1) ) +  ( (values.y2 - values.y1) * (values.y2 - values.y1) ))

  };
  
  module.exports = shortestDistance;