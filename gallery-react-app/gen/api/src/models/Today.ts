/* tslint:disable */
/* eslint-disable */
/**
 * Hello our Gallery service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Today
 */
export interface Today {
    /**
     * 
     * @type {string}
     * @memberof Today
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Today
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof Today
     */
    artist?: string;
    /**
     * 
     * @type {string}
     * @memberof Today
     */
    start_time?: string;
    /**
     * 
     * @type {string}
     * @memberof Today
     */
    price?: string;
    /**
     * 
     * @type {string}
     * @memberof Today
     */
    location?: string;
    /**
     * 
     * @type {string}
     * @memberof Today
     */
    discription?: string;
}

export function TodayFromJSON(json: any): Today {
    return TodayFromJSONTyped(json, false);
}

export function TodayFromJSONTyped(json: any, ignoreDiscriminator: boolean): Today {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'artist': !exists(json, 'artist') ? undefined : json['artist'],
        'start_time': !exists(json, 'start-time') ? undefined : json['start-time'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'discription': !exists(json, 'discription') ? undefined : json['discription'],
    };
}

export function TodayToJSON(value?: Today | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'artist': value.artist,
        'start-time': value.start_time,
        'price': value.price,
        'location': value.location,
        'discription': value.discription,
    };
}


