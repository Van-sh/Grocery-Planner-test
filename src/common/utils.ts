export function debounce<T extends (...args: any[]) => any>(
  this: any,
  func: T,
  timeout: number = 1000,
) {
  let timer: NodeJS.Timeout;
  const context = this;
  return function (...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      return func.apply(context, args);
    }, timeout);
  };
}
