import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    return useMemo(() => {
        if (sort) {
            // Создаем новый отсортированный массив и возвращаем его
            return [...posts].sort((a, b) => {
                // Добавляем проверку на наличие нужного свойства
                const propA = a[sort] || '';
                const propB = b[sort] || '';
                return propA.localeCompare(propB);
            });
        }
        // Если сортировка не применяется, возвращаем исходный массив постов
        return [...posts];
    }, [sort, posts]);
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    return useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])

}