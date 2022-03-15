import { writable } from 'svelte/store';

export const saveddata = writable()

export const savedanswers= writable([])

export const quesanswerdata = writable([]);//to store user clicks data