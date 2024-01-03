import useSWR_1, { BareFetcher, SWRHook } from 'swr';

const useSWR: typeof useSWR_1 = (key: any, fn?: any, opts?: any) => {
  return useSWR_1(key, fn, {
    ...opts,
    use: [logger],
  });
};

function logger(useSWRNext: SWRHook) {
  return (key: any, fetcher: BareFetcher, config: any) => {
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
