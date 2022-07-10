export const enum ChatBubbleEdgeType {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export const BOTTOM_SHEET_MIN_Y = 60; // 바텀시트가 최대로 높이 올라갔을 때의 y 값
export const BOTTOM_SHEET_MAX_Y = window.innerHeight - 80; // 바텀시트가 최소로 내려갔을 때의 y 값
export const BOTTOM_SHEET_HEIGHT = window.innerHeight - BOTTOM_SHEET_MIN_Y; // 바텀시트의 세로 길이
export const BOTTOM_SHEET_MIN_TOP = 10; // 무슨값인지 모르겠어서 임의로 줌
