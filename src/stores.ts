import { RedisKvs } from './util/redis-kvs';
import { RedisClient } from 'redis';

export function populateFilesToDownload(redisClient: RedisClient) {
    filesToDownloadXPath = new RedisKvs(redisClient, `${Date.now()}-media`);
}

export let filesToDownloadXPath: RedisKvs<{ url: string, namespace: string, mult?: number, width?: number }>;

export function populateArticleDetail(redisClient: RedisClient) {
    articleDetailXId = new RedisKvs(redisClient, `${Date.now()}-detail`);
}

export let articleDetailXId: RedisKvs<ArticleDetail>;

export function populateRequestCache(redisClient: RedisClient) {
    requestCacheXUrl = new RedisKvs(redisClient, `${Date.now()}-request`);
}

export let requestCacheXUrl: RedisKvs<any>;
