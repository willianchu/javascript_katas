let map =[
  [3,0,1,0,0,0,0,0],
  [0,0,0,0,1,0,0,0],
  [1,1,1,1,1,0,0,1],
  [0,0,0,0,0,0,0,1],
  [0,1,1,1,1,1,1,1],
  [0,1,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,3]
];


let FINISH = 3;
let FREESPACE = 0;
let BLOCKEDSPACE = 1;
let mapSize = {
  'maxX': map[0].length,
  'maxY': map.length
};

const findTheShortest = (initialX, initialY, finalX, finalY, map) => {
  let FINALX = finalX;
  let FINALY = finalY;
  let openList = {};
  let closeList = {};
  openList[initialX+"x"+initialY] = {
    'x': initialX,
    'y': initialY,
    'toStart': 0,
    'toFinish': Math.abs(initialX - FINALX) + Math.abs(initialY - FINALY),
    'cost': this.toStart + this.toFinish
  };
  let nextPosition = {};
  let currentPositionKey = initialX+"x"+initialY;

  do{
    let noNewAdd = true;
    nextPosition = canGoUp(openList[currentPositionKey]);
    if(nextPosition != {}){
      addToOpenList(nextPosition,currentPositionKey);
      noNewAdd = false;
    }
    nextPosition = canGodown(openList[currentPositionKey]);
    if(nextPosition != {}){
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    nextPosition = canGoLeft(openList[currentPositionKey]);
    if(nextPosition != {}){
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    nextPosition = canGoRight(openList[currentPositionKey]);
    if(nextPosition != {}){
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    if(noNewAdd){
      moveToCloseList(currentPositionKey);
    }
    currentPositionKey = getSmallerCost(openList);
  }while(currentPositionKey != "");

  const canGoUp = (tile) => {
    let up = tile.y - 1;
    let yAxis = tile.y;
    if(up < 0 ) return {};
    if(map[up][yAxis]===BLOCKEDSPACE) return {}
    if(map[up][yAxis]===FINISH) return {'end': true}
    return {'x': up, 'y': yAxis }
  }
  const canGodown = (tile) => {
    let down = tile.x + 1;
    let yAxis = tile.y;
    if(down > mapSize.maxX ) return {};
    if(map[down][yAxis]===BLOCKEDSPACE) return {}
    if(map[down][yAxis]===FINISH) return {'end': true}
    return {'x': tile.x-1, 'y': tile.y }
  }
  const addToOpenList = (position, fatherKey) => {
    openList[position.x+"x"+position.y] = {
      'x': position.x,
      'y': position.y,
      'father': openList[fatherKey].x +"x"+openList[fatherKey].y,
      'toStart': openList[fatherKey].toStart + 1,
      'toFinish': Math.abs(this.x - FINALX) + Math.abs(this.y - FINALY),
      'cost': this.toStart + this.toFinish
    };
  }
  const getSmallerCost = (list) => {
    let smallCost = 0;
    let smallKey = '';
    for(let key in list){
      if(list[key].cost < smallCost || smallKey === ''){
        smallKey = key;
        smallCost = list[key].cost;
      }
    }
    return smallKey;
  }
  const moveToCloseList = (key) => {
    closeList[key] = openList[key];
    delete openList[key];
  }

}

