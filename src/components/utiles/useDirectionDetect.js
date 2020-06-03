export default function useDirectionDetect() {
  let start = { x: 0, y: 0 };
  let end = { x: 0, y: 0 };
  let getDirection = () => {
    return {
      x: start.x - end.x,
      y: start.y - end.y,
    };
  };
  return {
    setStartingPosition: (value) => {
      start = value;
    },
    setEndPosition: (value) => {
      end = value;
    },
    getDirection: () => getDirection(),
  };
}
