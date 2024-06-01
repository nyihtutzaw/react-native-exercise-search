import { UserData } from "../data/leaderboard";

export const quickSort = (arr: UserData[]): UserData[] => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].bananas > pivot.bananas) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

export const hashTableSearch = (arr: UserData[], search: string): UserData[] | null => {
    const searchLower = search.toLowerCase();
    const hashTable: Record<string, UserData[]> = {};

    for (const item of arr) {
        const itemNameLower = item.name.toLowerCase();
        if (!hashTable[itemNameLower]) {
            hashTable[itemNameLower] = [];
        }
        hashTable[itemNameLower].push(item);
    }

    const results: UserData[] = [];

    for (const name of Object.keys(hashTable)) {

        const regex = new RegExp(searchLower, 'i');
        if (regex.test(name)) {
            results.push(...hashTable[name]);
        }
    }



    return results.length > 0 ? results : null;
};