export function inject(
  func: Function,
  execute: boolean = false,
  ...callWith: any[]
) {
  var s = document.createElement('script');
  s.innerText = execute
    ? `(${func.toString()})(${callWith.map(e => JSON.stringify(e)).join(', ')})`
    : func.toString();
  window.addEventListener('load', () => {
    document.body.appendChild(s);
  });
}

export function debugWindowFunctions(functionNames: string[]) {
  inject(
    async function(functionNames) {
      while (!window[functionNames[0]]) {
        console.log('waiting');
        await new Promise(resolve => {
          requestAnimationFrame(() => {
            resolve();
          });
        });
      }
      for (let funcName of functionNames) {
        if (typeof window[funcName] === 'function') {
          const func = window[funcName];
          window[funcName] = function(...rest: any) {
            console.log(`${funcName} called with ${rest}`);
            func.call(window, ...rest);
          };
        }
      }
    },
    true,
    functionNames
  );
}
