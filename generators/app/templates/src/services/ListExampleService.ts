const TOTAL_COUNT = 50;
const DEFAULT_COUNT = 5;
const list = [...Array(TOTAL_COUNT)].map((_, i) => i);

export const getList = ({ page, count = DEFAULT_COUNT }: { page: number; count?: number }) =>
  Promise.resolve({
    ok: true as const,
    problem: null,
    originalError: null,
    data: {
      page: list.slice((page - 1) * count, page * count),
      totalPages: Math.ceil(list.length / count),
      totalCount: list.length
    },
    status: 200,
    headers: {},
    config: {},
    duration: 100
  });
