import { error } from '@sveltejs/kit';

import createClient from '$lib/vendors/prismicio';

export async function load({ fetch, request }: any) {
	const UID = 'justin';
	const client = createClient({ fetch, request });
	const document = await client.getByUID('page', UID);

	if (document) {
		return { document };
	}

	error(404, 'Not found');
}
