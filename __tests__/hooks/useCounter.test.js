import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '@/hooks/useCounter';

describe('useCounter', () => {
  it('increments count', () => {
    const { result } = renderHook(() => useCounter());

    act(() => result.current.increment());

    expect(result.current.count).toBe(1);
  });
});