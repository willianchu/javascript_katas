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
  console.log("first key", initialX+"x"+initialY);
  console.log("first tile",openList[initialX+"x"+initialY]);

  const canGoUpDown = (tile, step) => {
    let upDown = tile.y + step;
    let xAxis = tile.x;
    let tileKey = xAxis+"x"+upDown;
    console.log("if 1");
    console.log(tileKey);
    console.log("is in open", openList[tileKey]);
    if(openList[tileKey]) return {'block': true};
    console.log("if 2");
    if(closeList[tileKey]) return {'block': true};
    console.log("if 3");
    if(upDown < 0 || upDown > mapSize.maxY) return {'block': true};
    console.log("if 4");
    if(map[xAxis][upDown]===BLOCKEDSPACE) return {'block': true}
    if(map[xAxis][upDown]===FINISH) return {'end': true}
    return {'x': xAxis, 'y': upDown }
  }
  const canGoLeftRight = (tile, step) => {
    let leftRight = tile.x + step;
    let yAxis = tile.y;
    let tileKey = leftRight+"x"+yAxis;
    if(openList[tileKey]) return {'block': true};
    if(closeList[tileKey]) return {'block': true};
    if(leftRight < 0 || leftRight > mapSize.maxX ) return {'block': true};
    if(map[leftRight][yAxis]===BLOCKEDSPACE) return {'block': true}
    if(map[leftRight][yAxis]===FINISH) return {'end': true}
    return {'x': leftRight, 'y': yAxis }
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
    console.log(list);
    for(let key in list){
      if(list[key].cost < smallCost || smallKey === ''){
        smallKey = key;
        smallCost = list[key].cost;
      }
    }
    console.log("theSmallKey",smallKey);
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
    console.log("it's you",nextPosition,nextPosition.x);
    if(nextPosition.block!= true){
      if(nextPosition.end) break;
      console.log("it's you",nextPosition);
      addToOpenList(nextPosition,currentPositionKey);
      noNewAdd = false;
    }
    console.log("go up",nextPosition);
    nextPosition = canGoUpDown(openList[currentPositionKey],1);
    if(nextPosition.block!= true){
      if(nextPosition.end) break;
      console.log("it's you??????",nextPosition);
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    console.log("go down",nextPosition);
    nextPosition = canGoLeftRight(openList[currentPositionKey], -1);
    if(nextPosition.block!= true){
      if(nextPosition.end) break;
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    console.log("go left",nextPosition);
    nextPosition = canGoLeftRight(openList[currentPositionKey], 1);
    if(nextPosition.block!= true){
      if(nextPosition.end) break;
      addToOpenList(nextPosition, currentPositionKey);
      noNewAdd = false;
    }
    console.log("go right",nextPosition);
    console.log("if no ADD --- ",noNewAdd);
    
    // if(noNewAdd){
    //   console.log("dead end");
    //   break;
    // }
      moveToCloseList(currentPositionKey);
      console.log("close list",closeList);
      currentPositionKey = getSmallerCost(openList);
      if(currentPositionKey==="") {
        console.log("Dead end 2");
        break;
      }
      console.log("new current position",currentPositionKey);
      console.log("open list",openList);
      console.log("close list",closeList);
    
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
