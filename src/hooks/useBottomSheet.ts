import { BOTTOM_SHEET_MIN_Y, BOTTOM_SHEET_MAX_Y, BOTTOM_SHEET_MIN_TOP } from '@/constants/components';
import { useRef, useEffect, useState } from 'react';
import { throttle } from '@/utils/index';

interface TouchStartMetrics {
  sheetY: number; // touchstart에서 BottomSheet의 최상단 모서리의 Y값
  touchY: number; // touchstart에서 터치 포인트의 Y값
}

interface TouchMoveMetrics {
  movingDirection: null | 'DOWN' | 'UP'; // 유저가 터치를 움직이고 있는 방향
}

export function useBottomSheet() {
  const sheet = useRef<HTMLDivElement>(null);

  const [touchStart, setTouchStart] = useState({
    sheetY: 0,
    touchY: 0,
  });

  const [touchMove, setTouchMove] = useState({
    touchY: 0,
  });

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart({
      sheetY: sheet.current.getBoundingClientRect().y,
      touchY: e.touches[0].clientY,
    });
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    const currentTouch = e.touches[0].clientY;
    setTouchMove({ touchY: currentTouch });
  };

  const controlSheetPosition = () => {
    const movingDirection = touchStart.touchY <= touchMove.touchY ? 'DOWN' : 'UP';
    if (movingDirection === 'UP') {
      sheet.current.style.setProperty('transform', 'translateY(0)');
    } else {
      sheet.current.style.setProperty('transform', 'translateY(500px)');
    }
  };

  // Touch Event 핸들러들을 등록한다.
  useEffect(() => {
    sheet.current.style.setProperty('transform', `translateY(500px)`);

    sheet.current.addEventListener('touchstart', (event: TouchEvent) =>
      throttle({ event, func: handleTouchStart, delay: 100 })
    );
    sheet.current.addEventListener('touchmove', (event: TouchEvent) =>
      throttle({ event, func: handleTouchMove, delay: 100 })
    );

    return () => {
      sheet.current.removeEventListener('touchstart', handleTouchStart);
      sheet.current.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(controlSheetPosition, [touchStart]);

  return { sheet };
}
