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
  // console.log("first key", initialX+"x"+initialY);
  // console.log("first tile",openList[initialX+"x"+initialY]);

  const canGoUpDown = (tile, step) => {
    console.log("tile",tile)
    let arrayLine = tile.y + step;
    let arrayColumn = tile.x;
    console.log("if 1");
    if(arrayLine < 0 || arrayLine > mapSize.maxY) return {'block': true};
    let tileKey = arrayColumn+"x"+arrayLine;
    console.log(tileKey);
    console.log("is in open", openList[tileKey]);
    console.log("if 2");
    if(openList[tileKey]) return {'block': true};
    console.log("if 3");
    if(closeList[tileKey]) return {'block': true};
    console.log("if 4",map[arrayLine][arrayColumn],map[arrayLine][arrayColumn]===1);
    if(map[arrayLine][arrayColumn]===BLOCKEDSPACE) {
      console.log("Block if 1");
      return {'block': true}
    }
    if(map[arrayLine][arrayColumn]===FINISH) return {'end': true}
    return {'x': arrayColumn, 'y': arrayLine }
  }
  const canGoLeftRight = (tile, step) => {
    let arrayColumn = tile.x + step;
    let arrayLine = tile.y;
    let tileKey = arrayColumn+"x"+arrayLine;
    if(openList[tileKey]) return {'block': true};
    if(closeList[tileKey]) return {'block': true};
    if(leftRight < 0 || leftRight > mapSize.maxX ) return {'block': true};
    if(map[arrayLine][arrayColumn]===BLOCKEDSPACE) return {'block': true}
    if(map[arrayLine][arrayColumn]===FINISH) return {'end': true}
    return {'x': arrayColumn, 'y': arrayLine }
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
    // console.log(list);
    for(let key in list){
      if(list[key].cost < smallCost || smallKey === ''){
        smallKey = key;
        smallCost = list[key].cost;
      }
    }
    // console.log("theSmallKey",smallKey);
    return smallKey;
  }
  const moveToCloseList = (key) => {
    closeList[key] = {...openList[key]};
    delete openList[key];
  }

  do{
    console.log("######################## round");
    let noNewAdd = true;
    nextPosition = canGoUpDown(openList[currentPositionKey],-1);
    // console.log("it's you",nextPosition,nextPosition.x);
    if(nextPosition.block!= true){
      if(nextPosition.end) break;
      // console.log("it's you",nextPosition);
      addToOpenList(nextPosition,currentPositionKey);
      noNewAdd = false;
    }
    // console.log("go up",nextPosition);
    nextPosition = canGoUpDown(openList[currentPositionKey],1);
    console.log("block",nextPosition.block,nextPosition.block!=true);
    if(nextPosition.block != true){
      if(nextPosition.end) break;
      console.log("Recording >>>>>>",nextPosition);
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    // console.log("go down",nextPosition);

    nextPosition = canGoLeftRight(openList[currentPositionKey], -1);
    if(nextPosition.block!= true){
      if(nextPosition.end) break;
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    
    // console.log("go left",nextPosition);
    nextPosition = canGoLeftRight(openList[currentPositionKey], 1);
    if(nextPosition.block!= true){
      if(nextPosition.end) break;
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    // console.log("go right",nextPosition);
    // console.log("if no ADD --- ",noNewAdd);
    
    // if(noNewAdd){
    //   console.log("dead end");
    //   break;
    // }
      moveToCloseList(currentPositionKey);
      // console.log("close list",closeList);
      currentPositionKey = getSmallerCost(openList);
      if(currentPositionKey==="") {
        console.log("Dead end 2");
        break;
      }
      // console.log("new current position",currentPositionKey);
      // console.log("open list",openList);
      // console.log("close list",closeList);
    
    console.log("End ######################## round");
    // break;
  }while(currentPositionKey != "");

  let next = openList[currentPositionKey].father;
  console.log(currentPositionKey);
  while(next!=null){
    console.log(next);
    next = closeList[next].father;
  }
  return;
}

findTheShortest(0,0,7,7,map);
