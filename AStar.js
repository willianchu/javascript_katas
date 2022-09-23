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
  'maxX': map[0].length - 1,
  'maxY': map.length - 1
};

const findTheShortest = (initialX, initialY, finalX, finalY, map) => {

  const canGoUpDown = (tile, step) => {
    let upDown = tile.y + step;
    let xAxis = tile.x;
    let tileKey = tile.x+"x"+tile.y;
    if(openList[tileKey]) return {};
    if(closeList[tileKey]) return {};
    if(upDown < 0 || upDown > mapSize.maxY) return {};
    if(map[xAxis][upDown]===BLOCKEDSPACE) return {}
    if(map[xAxis][upDown]===FINISH) return {'end': true}
    return {'x': xAxis, 'y': upDown }
  }
  const canGoLeftRight = (tile, step) => {
    let leftRight = tile.x + 1;
    let yAxis = tile.y;
    if(openList[tileKey]) return {};
    if(closeList[tileKey]) return {};
    if(leftRight < 0 || leftRight > mapSize.maxX ) return {};
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
    nextPosition = canGoUpDown(openList[currentPositionKey],-1);
    if(nextPosition != {}){
      if(nextPosition.end) break;
      addToOpenList(nextPosition,currentPositionKey);
      noNewAdd = false;
    }
    console.log("go up",nextPosition);
    nextPosition = canGoUpDown(openList[currentPositionKey],1);
    if(nextPosition != {}){
      if(nextPosition.end) break;
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    console.log("go down",nextPosition);
    nextPosition = canGoLeftRight(openList[currentPositionKey], -1);
    if(nextPosition != {}){
      if(nextPosition.end) break;
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    console.log("go left",nextPosition);
    nextPosition = canGoLeftRight(openList[currentPositionKey], 1);
    if(nextPosition != {}){
      if(nextPosition.end) break;
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    console.log("go right",nextPosition);
    if(noNewAdd){
      moveToCloseList(currentPositionKey);
      console.log("close list",closeList);
    }
    
    currentPositionKey = getSmallerCost(openList);
    console.log("new current position",currentPositionKey);
    console.log("open list",openList);
  }while(currentPositionKey != "");

  console.log(currentPositionKey);
  return;
}

findTheShortest(0,0,7,7,map);
