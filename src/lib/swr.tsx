import origin, { SWRHook } from 'swr';

const useSWR: SWRHook = (key: any, fn?: any, config?: any) => {
  const { use = [] } = config || {};
  return origin(key, fn, { ...config, use: [logger, ...use] });
};

function logger(useSWRNext: any) {
  return (key: any, fetcher: any, config: any) => {
    // 将日志记录器添加到原始 fetcher。
    const extendedFetcher = (...args: any[]) => {
      console.log('SWR Request:', key);
      return fetcher(...args);
    };

    // 使用新的 fetcher 执行 hook。
    return useSWRNext(key, extendedFetcher, config);
  };
}

export default useSWR;
