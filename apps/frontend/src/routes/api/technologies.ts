import type { EndpointOutput } from '@sveltejs/kit';
import env from '$lib/env';

export async function get(): Promise<EndpointOutput> {
    const res = await fetch(env.apiUrl + '/technologies?populate=*');
    const data = await res.json();
    
    return { body: data };
}