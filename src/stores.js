import { writable } from "svelte/store";

export const addGrade = writable(false);

export const userEmail = writable("");
export const userName = writable("");
export const loggedIn = writable(false);