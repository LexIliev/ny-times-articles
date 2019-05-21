import { getRoute } from '../../utils';

describe('Utils getRoute function', () => {
  test('should return route with replaced params', () => {
    expect(getRoute('example/:id', { id: 1 })).toEqual('example/1');
  });
  test('should return route without replaced params', () => {
    expect(getRoute('example/:id', { count: 2 })).toEqual('example');
  });

  test('should return route', () => {
    expect(getRoute('example')).toEqual('example');
  });
});
