import { BOTTOM_SHEET_MIN_Y, BOTTOM_SHEET_MAX_Y, BOTTOM_SHEET_MIN_TOP } from '@/constants/components';
import { useRef, useEffect, useState } from 'react';
import { throttle } from '@/utils/index';

interface BottomSheetMetrics {
  touchStart: {
    sheetY: number; // touchstart에서 BottomSheet의 최상단 모서리의 Y값
    touchY: number; // touchstart에서 터치 포인트의 Y값
  };
  touchMove: {
    prevTouchY?: number; // 다음 touchmove 이벤트 핸들러에서 필요한 터치 포인트 Y값을 저장
    movingDirection: null | 'DOWN' | 'UP'; // 유저가 터치를 움직이고 있는 방향
  };
}

export function useBottomSheet() {
  const sheet = useRef<HTMLDivElement>(null);

  const [sheetTop, setSheetTop] = useState(0);

  const metrics = useRef<BottomSheetMetrics>({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: null,
    },
  });

  // Touch Event 핸들러들을 등록한다.
  useEffect(() => {
    sheet.current.style.setProperty('transform', `translateY(500px)`);

    const handleTouchStart = (e: TouchEvent) => {
      console.log('handleTouchStart');
      const { touchStart } = metrics.current;
      touchStart.sheetY = sheet.current.getBoundingClientRect().y; // 562
      touchStart.touchY = e.touches[0].clientY; // 589
    };

    const handleTouchMove = (e: TouchEvent) => {
      console.log('handleTouchMove');
      e.preventDefault();

      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0].clientY;

      touchMove.prevTouchY = touchStart.touchY;
      touchMove.movingDirection = touchMove.prevTouchY <= currentTouch ? 'DOWN' : 'UP';

      setSheetTop(0);
      if (touchMove.movingDirection === 'UP') {
        sheet.current.style.setProperty('transform', 'translateY(0)');
      } else {
        sheet.current.style.setProperty('transform', 'translateY(500px)');
      }
    };

    sheet.current.addEventListener('touchstart', handleTouchStart);

    sheet.current.addEventListener('touchmove', (event: TouchEvent) =>
      throttle({ event, func: handleTouchMove, delay: 100 })
    );

    return () => {
      sheet.current.removeEventListener('touchstart', handleTouchStart);
      sheet.current.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return { sheet };
}
