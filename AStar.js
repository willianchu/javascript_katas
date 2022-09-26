let map =[
  [3,0,1,0,0,0,0,0],
  [0,0,0,0,1,1,0,0],
  [1,1,1,1,1,1,0,1],
  [0,0,0,0,0,0,0,1],
  [0,1,1,1,1,1,1,1],
  [0,1,0,0,0,1,0,0],
  [0,1,0,1,0,1,0,0],
  [0,0,0,1,0,0,0,3]
];



let FINISH = 3;
let FREESPACE = 0;
let BLOCKEDSPACE = 1;
let mapSize = {
  'maxX': map[0].length - 1,
  'maxY': map.length - 1
};

const findTheShortest = (initialX, initialY, finalX, finalY, map) => {
  
  let FINALX = finalX;
  let FINALY = finalY;
  let openList = {};
  let closeList = {};
  openList[initialX+"x"+initialY] = {
    'x': initialX,
    'y': initialY,
    'father': null,
    'toStart': 0,
    'toFinish': Math.abs(initialX - FINALX) + Math.abs(initialY - FINALY),
    'cost': Math.abs(initialX - FINALX) + Math.abs(initialY - FINALY)
  };
  let nextPosition = {'x': initialX, 'y': initialY};
  let currentPositionKey = initialX+"x"+initialY;

  const canGoUpDown = (tile, step) => {
    let arrayLine = tile.y + step;
    let arrayColumn = tile.x;
    if(arrayLine < 0 || arrayLine > mapSize.maxY) return {'block': true};
    let tileKey = arrayColumn+"x"+arrayLine;
    if(openList[tileKey]) return {'block': true};
    if(closeList[tileKey]) return {'block': true};
    if(map[arrayLine][arrayColumn]===BLOCKEDSPACE) return {'block': true};
    let answer = {'x': arrayColumn, 'y': arrayLine }
    if(map[arrayLine][arrayColumn]===FINISH) answer['end'] = true;
    return answer;
  }
  const canGoLeftRight = (tile, step) => {
    let arrayColumn = tile.x + step;
    let arrayLine = tile.y;
    let tileKey = arrayColumn+"x"+arrayLine;
    if(openList[tileKey]) return {'block': true};
    if(closeList[tileKey]) return {'block': true};
    if(arrayColumn < 0 || arrayColumn > mapSize.maxX ) return {'block': true};
    if(map[arrayLine][arrayColumn]===BLOCKEDSPACE) return {'block': true}
    let answer = {'x': arrayColumn, 'y': arrayLine};
    if(map[arrayLine][arrayColumn]===FINISH) answer['end'] = true;
    return answer;
  }
  const addToOpenList = (position, fatherKey) => {
    let start = openList[fatherKey].toStart + 1;
    let finish = Math.abs(position.x - FINALX) + Math.abs(position.y - FINALY);
    openList[position.x+"x"+position.y] = {
      'x': position.x,
      'y': position.y,
      'father': openList[fatherKey].x +"x"+openList[fatherKey].y,
      'toStart': start,
      'toFinish': finish,
      'cost': start + finish
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
    closeList[key] = {...openList[key]};
    delete openList[key];
    console.log("closed >>>>> key",key);
    console.log("close list",closeList);
    console.log("open list",openList);
  }

  do{
    console.log("######################## round");
    let noNewAdd = true;
    nextPosition = canGoUpDown(openList[currentPositionKey],-1);
    if(nextPosition.block!= true){
      addToOpenList(nextPosition,currentPositionKey);
      noNewAdd = false;
    }
    nextPosition = canGoUpDown(openList[currentPositionKey],1);
    if(nextPosition.block != true){
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    
    nextPosition = canGoLeftRight(openList[currentPositionKey], -1);
    if(nextPosition.block!= true){
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    
    nextPosition = canGoLeftRight(openList[currentPositionKey], 1);
    if(nextPosition.block!= true){
      // if(nextPosition.end) break;
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    console.log("nextposition", nextPosition);
    console.log("current", currentPositionKey);
    moveToCloseList(currentPositionKey);
    if(nextPosition.end) {
      currentPositionKey = finalX+"x"+finalY;
      moveToCloseList(currentPositionKey);
      break;
    }
      currentPositionKey = getSmallerCost(openList);
      if(currentPositionKey==="") {
        console.log("Dead End");
        break;
      }
  }while(currentPositionKey != "");

  
  let next = currentPositionKey;
  while(next!=null){
    console.log(next);
    next = closeList[next].father;
  }
  return;
}

findTheShortest(0,0,7,7,map);
