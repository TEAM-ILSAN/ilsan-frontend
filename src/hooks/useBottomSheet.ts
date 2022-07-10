import { BOTTOM_SHEET_MIN_Y, BOTTOM_SHEET_MAX_Y, BOTTOM_SHEET_MIN_TOP } from '@/constants/components';
import { useRef, useEffect } from 'react';

interface BottomSheetMetrics {
  touchStart: {
    sheetY: number; // touchstart에서 BottomSheet의 최상단 모서리의 Y값
    touchY: number; // touchstart에서 터치 포인트의 Y값
  };
  touchMove: {
    prevTouchY?: number; // 다음 touchmove 이벤트 핸들러에서 필요한 터치 포인트 Y값을 저장
    movingDirection: 'none' | 'down' | 'up'; // 유저가 터치를 움직이고 있는 방향
  };
}

export function useBottomSheet() {
  const sheet = useRef<HTMLDivElement>(null);

  const metrics = useRef<BottomSheetMetrics>({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: 'none',
    },
  });

  // Touch Event 핸들러들을 등록한다.
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const { touchStart, touchMove } = metrics.current;
      touchStart.sheetY = sheet.current.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();

      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = 'down';
      }

      if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = 'up';
      }

      // 터치 시작점에서부터 현재 터치 포인트까지의 변화된 y값
      const touchOffset = currentTouch.clientY - touchStart.touchY;
      let nextSheetY = touchStart.sheetY + touchOffset;

      // nextSheetY 는 MIN_Y와 MAX_Y 사이의 값으로 clamp 되어야 한다

      if (nextSheetY <= BOTTOM_SHEET_MIN_Y) {
        nextSheetY = BOTTOM_SHEET_MIN_Y;
      }

      if (nextSheetY >= BOTTOM_SHEET_MAX_Y) {
        nextSheetY = BOTTOM_SHEET_MAX_Y;
      }

      sheet.current.style.setProperty('transform', `translateY(${(nextSheetY - BOTTOM_SHEET_MAX_Y) / 10}rem)`);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const { touchMove } = metrics.current;

      // Snap Animation

      const currentSheetY = sheet.current.getBoundingClientRect().y;

      if (currentSheetY !== BOTTOM_SHEET_MIN_TOP) {
        if (touchMove.movingDirection === 'down') {
          sheet.current.style.setProperty('transform', 'translateY(0)');
        }

        if (touchMove.movingDirection === 'up') {
          sheet.current.style.setProperty(
            'transform',
            `translateY(${(BOTTOM_SHEET_MIN_Y - BOTTOM_SHEET_MAX_Y) / 10}rem)`
          );
        }
      }

      // metrics 초기화.

      metrics.current = {
        touchStart: {
          sheetY: 0,
          touchY: 0,
        },
        touchMove: {
          prevTouchY: 0,
          movingDirection: 'none',
        },
      };
    };

    sheet.current.addEventListener('touchstart', handleTouchStart);
    sheet.current.addEventListener('touchmove', handleTouchMove);
    sheet.current.addEventListener('touchend', handleTouchEnd);

    return () => {
      sheet.current.removeEventListener('touchstart', handleTouchStart);
      sheet.current.removeEventListener('touchmove', handleTouchMove);
      sheet.current.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return { sheet };
}
