import { searchEverything } from '@/lib/actions/db/general/read.actions';
import { QueryParams } from '@/lib/utils/types/types';

export async function GET(req: Request) {
  const params = new URL(req.url).searchParams;
  const query = params.get('query');

  const queryParams: QueryParams = {
    query: query || '',
    page: 0,
    searchFields: [],
    relationalFields: [],
  };

  const res = await searchEverything(queryParams);

  if (!res || res.length === 0) {
    return new Response('No results found', { status: 404 });
  }

  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
